// Community Survey model
// ==============

// Require mongoose
const mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
const Schema = mongoose.Schema;

// Create the community survey with our schema class
var communitySchema = new Schema({
  // The developerBeingRated is the user associated with receiving the community score
  developerBeingRated: {
	type: Schema.Types.ObjectId,
	ref: "User2"
  },
  averageRating: [{
        tag: String, //new object pushed with recalculated values 
        points: Number //Decimal??
  }],
  communitySurvey: [{ // DOES need its own schema
        userId: ObjectID('sakfjasklj324kjlkjdsfHASAN'),
        skillTag: String,
        points: Number
  }]
});

// Create the CommunitySurvey model using the communitySchema
var CommunitySurvey = mongoose.model("CommunitySurvey", communitySchema);

// Export the CommunitySurvey model
module.exports = CommunitySurvey;




