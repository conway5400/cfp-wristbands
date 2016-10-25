//mongoose connections
var Payment                 = require("./models/payment"),
    Profile                 = require("./models/profile"),
    Transaction             = require("./models/transaction"),
    Vendor                  = require("./models/vendor"),
    Wristband               = require("./models/wristband");
    // populateData            = require("./populateUnits.js");

//clear all data + repopulate units
function clearAllData (callback) {
    
     //Clear payment databse 
    Payment.remove({}, function(err){
        if (err) return err;
    });       
    
    //Clear profile databse 
    Profile.remove({}, function(err){
        if (err) return err;
    });     
         
    //Clear transaction databse 
    Transaction.remove({}, function(err){
        if (err) return err;
    });       
    
    //Clear vendor databse 
    Vendor.remove({}, function(err){
        if (err) return err;
    });     
    
    //Clear wristband databse 
    Wristband.remove({}, function(err){
        if (err) return err;
    });     
    
    callback(null, true);
    
    // populateUnits(function(err, done) {
    //     if (err) return err;
    //     if(done == true){
    //         callback(null, true);
    //     }
    // });
}

module.exports = clearAllData;