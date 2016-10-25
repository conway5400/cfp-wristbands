//variable declarations
var   express           = require('express'),
      router            = new express.Router(),
      Wristband         = require('../models/wristband.js');

//NEW - view for new wristband
router.get("/new", function(req, res){
    res.render('../views/wristbands/newWristband.ejs');   
});


//FIND - view for new wristband
router.get("/find", function(req, res){
    res.render('../views/wristbands/findWristband.ejs');   
});

//WRISTBAND - view for new wristband
router.get("/:id", function(req, res){
    Wristband.findById(req.params.id).populate('profile').exec(function(err, foundWristband) {
        console.log("FOUND: " + foundWristband);       
        res.render('../views/wristbands/viewWristband.ejs', {wristband: foundWristband});  
    })
});


module.exports = router;