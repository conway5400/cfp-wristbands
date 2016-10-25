//variable declarations
var   express           = require('express'),
      mongoose          = require('mongoose'),
      Wristband         = require('../../models/wristband.js'),
      Profile           = require('../../models/profile.js'),
      router            = new express.Router();


//make new wristband post and determine if it exists
router.post('/', function(req, res) {

    console.log("new wristband");
    console.log(req.body);
    // console.log(req);
    var newProfile;
    
    Wristband.findOne({'rfidNumber' : req.body.rfidNumber}, function(err, foundWristband) {
        
        var textUpdates = Boolean;
        
        if(req.body.profile.textUpdates == '1') {
            textUpdates = true;
        } else {
            textUpdates = false;
        }
        
        newProfile = {
            
            firstName: req.body.profile.firstName,
            lastName: req.body.profile.lastName,
            cellNumber: req.body.profile.cellNumber,
            textUpdates: textUpdates,
            wristband: foundWristband
        };
        
        createProfile(foundWristband);
        
    });
    
    
    function createProfile (wristband) {
        
        console.log(wristband);
    
        Profile.create(newProfile, function(err, newProfile) {
        
            if(err) return err;
            
            console.log("NEW" + newProfile);
            
            wristband.profile = newProfile;
            wristband.pinNumber = req.body.profile.pinNumber;
            wristband.save();
            
            console.log("SUCCESS");
            
            res.send(true);
            
        });   
        
    }
});    
      
module.exports = router;      