// Environment variables
require("dotenv").config();

// Core dependencies
const express = require("express");
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

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Session and Passport initialization
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes setup
app.use(authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Server is online!");
});

// Server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
