var mongoose = require("mongoose");

//contact schema 
var paymentSchema = new mongoose.Schema({
    nickname: String,
    ccNumber: String,
    expDate: String,
    profiles: 
        [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Profile"
            }
        ],
        
    transactions:         
        [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Transaction"
            }
        ]
});

module.exports = mongoose.model("Payment", paymentSchema);