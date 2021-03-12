const mongoose = require("mongoose");

const Certificate = new mongoose.Schema(
  {
    studentFirstName: {
      type: String,
      //required: [true, "Please enter the student's first name"]
    },
    studentLastName: {
      type: String,
     // required: [true,"Please enter the student's last name"]
    },

    cohort: {
      type: String,
     // required: [true, "Please enter the student's cohort"]
    },

    graduationDate: {
      type: Date,
      //required: [true, "Please enter the student's cohort"]
    },
    certificateUrl: {
        type: URL,
        //required: [true, "Please enter the certificate url"]
    },
    status:{
        type:String,
    },
   timestamps: true 
}
);


module.exports = mongoose.model("Certificate", Certificate);