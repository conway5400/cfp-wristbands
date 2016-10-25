var mongoose = require("mongoose");

//contact schema 
var vendorProfile = new mongoose.Schema({
    
    name: String,
    phoneNumber: String,
    
    transactions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Transaction"
        }]    
});

module.exports = mongoose.model("Vendor", vendorProfile);