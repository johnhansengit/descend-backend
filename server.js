// Environment variables
require("dotenv").config();

// Core dependencies
const express = require("express");
const { sequelize } = require('./models'); 
const path = require('path');

// Middleware
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require('cookie-parser');
const session = require('express-session');

// Passport configuration
require('./config/passport');
const passport = require('passport');

// Routes
const authRoutes = require('./routes/auth-routes');

// Application setup
const app = express();
const { PORT } = process.env;

/// Test database connection
sequelize.authenticate()
.then(() => {
  console.log('Database connection has been established successfully.');
})

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Session and Passport initialization
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes setup
app.use(authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Server is online!");
});

// Authentication check route
app.get('/api/isAuthenticated', (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.json({ authenticated: req.isAuthenticated() });
  console.log("Server.js: "+req.isAuthenticated());
});

// Server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
