//variable declarations
var   express               = require('express'),
      router                = new express.Router(),
      wristbandAPIRoutes    = require('./api/wristbands.js'),
      profileAPIRoutes      = require('./api/profiles.js');

router.use('/wristbands', wristbandAPIRoutes);
router.use('/profiles', profileAPIRoutes);
      
     
//INDEX - get all units
router.get("/", function(req, res){
    
    console.log("home hit");
    res.send("home api route hit");    

});


module.exports = router;