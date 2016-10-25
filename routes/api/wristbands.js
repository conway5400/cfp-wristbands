//variable declarations
var   express           = require('express'),
      mongoose          = require('mongoose'),
      Wristband         = require('../../models/wristband.js'),
      router            = new express.Router();

//UPDATE
router.put('/', function(req, res) {
    console.log("PUT HIT");
    console.log(req.body);
});

//GET - check if wristband exists
router.get("/", function(req, res){
    
    console.log(req.query);

    var response = String;
    
    Wristband.findOne({'rfidNumber' : req.query.rfidNumber}).populate('profile').exec(function(err, foundWristband) {

        console.log(foundWristband);

        if(err) return err;
        
        if (!foundWristband) {
            response = JSON.stringify({ 
                wristbandExist: false,
                error: "No wristband found!", 
            });
            res.send(response);
            
        } else if (foundWristband.pinNumber == null) {
            response = JSON.stringify({ 
                wristbandExist: true,
                pinRequired: false,
                data: foundWristband, 
            });
            res.send(response);  
        } else {
            if (req.query.pinNumber == null) {
                response = JSON.stringify({ 
                    wristbandExist: true,
                    pinRequired: true,
                    error: "PIN# Required", 
                }); 
                res.send(response);       
            } else if (foundWristband.pinNumber != req.query.pinNumber) {
                response = JSON.stringify({ 
                    wristbandExist: true,
                    pinRequired: true,
                    error: "Invalid Pin Number", 
                });
                res.send(response);       
            } else {
                response = JSON.stringify({ 
                    wristbandExist: true,
                    pinRequired: true,
                    data: foundWristband, 
                });
                res.send(response);   
            }
        }
    });
});    

//make new wristband post and determine if it exists
router.post('/', function(req, res) {

    var rfidNumber;
    var pinNumber;
    var results;
    
    if (req.body.rfidNumber != null) {
        rfidNumber = req.body.rfidNumber;
    } else if (req.query.rfidNumber != null) {
        rfidNumber = req.query.rfidNumber;
    }    
    
    if (req.body.pinNumber != null) {
        pinNumber = req.body.pinNumber;
    } else if (req.query.pinNumber != null) {
        pinNumber = req.query.pinNumber;
    }
    
    var newWristband = {
        
        rfidNumber: rfidNumber,
        pinNumber: pinNumber

    };
    
    console.log("RFID NUMBER " + rfidNumber);
            
    Wristband.create(newWristband, function(err, newWristband) {
        
        console.log("ERROR: " + err);
        
        if(err) {
            if(err.code == 11000) {
                results = JSON.stringify({
                    error: "Error! Wristband already exists"
                });
                
                res.send(results);
                return err;
            } else {
                results = JSON.stringify({
                    error: "Unknown error occureds"
                });
                
                res.send(results);
                return err;
            }
        };
        
        results = JSON.stringify({
            data: newWristband
        });
        
        res.send(results);
        
    });
            
});    
      
module.exports = router;