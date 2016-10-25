var mongoose = require("mongoose");

//contact schema 
var wristbandProfile = new mongoose.Schema({
    
    rfidNumber: { type : String , unique : true, required : true },
    pinNumber: String,
    
    profile: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Profile"
        },
    
    transactions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Transaction"
        }]    
});

module.exports = mongoose.model("Wristband", wristbandProfile);