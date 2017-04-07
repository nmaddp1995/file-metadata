var express= require("express");
var multer = require("multer");
var app = express();
var port = process.env.PORT || 8080;
var multer = require("multer");
var upload = multer({dest:"upload/"});
// var upload = multer();
// var bodyParser= require("body-parser");
// var cors = require("cors");
// app.get("/",function(req,res){
//   res.sendfile('index.html', {root: __dirname }); 
// });

// app.use(bodyParser.json());
// app.use(cors());
app.use(express.static(__dirname+"/public"));

app.post('/get-detail',upload.single('fileName'),function(req,res){
    var file =req.file;
    var info ={
        "filename " : file.originalname,
        "mimetype " : file.mimetype,
        "size " : file.size
    }
    return res.json(info);
});


app.listen(port,function(){
    console.log("Server is running");
})