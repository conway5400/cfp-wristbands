var mongoose = require("mongoose");

//contact schema 
var userProfile = new mongoose.Schema({
    
    firstName: String,
    lastName: String,
    cellNumber: String,
    textUpdates: Boolean,
    
    payment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Payment" 
        },
    
    wristband: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Wristband"
        }
});

module.exports = mongoose.model("Profile", userProfile);