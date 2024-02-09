// Environment variables
require("dotenv").config();

// Core dependencies
const express = require("express");
const { sequelize } = require('./models'); 
const path = require('path');

// Middleware
const cors = require("cors");
const morgan = require("morgan");

// Import AuthController for JWT-based auth
const { Login, Register } = require('./controllers/AuthController');

// Application setup
const app = express();
const { PORT } = process.env;

// Test database connection
sequelize.authenticate()
.then(() => {
  console.log('Database connection has been established successfully.');
});

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, 'public')));

// Auth Routes setup
const AuthRouter = require('./routes/AuthRouter')
app.use('/auth', AuthRouter)

// Routes setup
const ProfileRouter = require('./routes/ProfileRouter')
app.use('/api/profile', ProfileRouter)

const CertificationRouter = require('./routes/CertificationRouter')
app.use('/api/certifications', CertificationRouter)

app.use('/uploads', express.static('uploads'));

// Test route
app.get("/", (req, res) => {
  res.send("Server is online!");
});

// Server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
