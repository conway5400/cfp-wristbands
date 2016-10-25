var mongoose = require("mongoose");

//contact schema 
var transactionProfile = new mongoose.Schema({
    
    amount: Number, 
    description: String,
    
    wristband: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Wristband"
        },
    
    vendor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vendor"
        }
});

module.exports = mongoose.model("Transaction", transactionProfile);