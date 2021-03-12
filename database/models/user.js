const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    firstName: {
      type: String,
      //required: [true, "Please enter your first name"]
    },
    lastName: {
      type: String,
     // required: [true,"Please enter your last name"]
    },
    email: {
      type: String,
     // required: [true, "Please enter your email"]
    },
    password: {
      type: String,
      //required: [true, "Please enter your password"]
    },
   timestamps: true 
}
);


module.exports = mongoose.model("User", User);