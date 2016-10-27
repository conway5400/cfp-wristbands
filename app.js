var mongoose            =   require("mongoose"),
    express             =   require("express"),
    bodyParser          =   require("body-parser"),
    methodOverride      =   require("method-override"),
    apiRoutes           =   require('./routes/apiRoutes.js'),
    wristbandRoutes     =   require('./routes/wristbandRoutes.js'),
    clearAllData        =   require('./clearAllData.js'),
    app                 =   express();
    
mongoose.connect('mongodb://localhost:27017/cfp-wristbands');

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));


app.use('/api', apiRoutes);
app.use('/wristbands', wristbandRoutes);

//Landing route to index
app.get("/", function(req, res){
    res.render("../views/index.ejs");
});

//Landing route to index
app.get("/clearAllData", function(req, res){
    clearAllData(function(err, done) {
        if(err) return err;
        res.redirect('/');
    });
});

// //server listen
// app.listen(process.env.PORT, process.env.IP, function() {
//     console.log("CFP Wristbands are Now Live!");
// });

//server listen - GCloud
app.listen(8080, function() {
    console.log("CFP Wristbands are Now Live on port 8080!");
});