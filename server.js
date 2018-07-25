// Required Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
// const passport = require('passport');
// const expressSession = require('express-session');
const PORT = process.env.PORT || 3000;

// Express server
const app = express();

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const communitySurvey = require('./routes/api/communitySurvey');

// const logger = require("morgan");
// const path = require("path");

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use express.static to serve the public folder as a static directory
// app.use(express.static("public"));
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
// app.use(routes);


// Use morgan logger for logging requests
// app.use(logger("dev"));

// // Show mongoose errors
// db.on("error", function(error) {
//     console.log("Mongoose Error: ", error);
// });

// // Log a success message
// db.once("open", function() {
//     console.log("Mongoose connection successful");
// });

var db = mongoose.connection;


// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


// Configuring Passport
//Middleware 


// Initialize Passport


// Connect routes
app.use('api/users', users);
app.use('api/profile', profile);
app.use('api/communitySurvey', communitySurvey);

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });