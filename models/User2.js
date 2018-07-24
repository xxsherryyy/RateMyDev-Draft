// User model
// ==============

// Require mongoose
const mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
const Schema = mongoose.Schema;

// Create the User/dev with our schema class
var userSchema = new Schema({
  // firstName, a string, must be entered
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
    // make unique
  },
  password: {
    type: String,
    required: true
  },
  zipCode: {
    type: Number
  },
  phone: {
    type: String
  },
  portfolio: {
    type: String
  },
  linkedIn: {
    type: String
  },
  github: {
    type: String
  },
  relocation: {
    type: Boolean
  },
  description: {
    type: String
  },

  selfSurvey: [
    {
        //userId: //ObjectID('sakfjasklj324kjlkjdsfDAVID'), Schema.Types.ObjectId //is this necessary here if it's you that's logged in?
        tag: String,
        points: Number
    }]
});

// Create the User model using the userSchema
var User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;




