const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

var items = ["complete app dev","Web dev","Something else"];
var workItems=[];



app.get("/", function (req, res) {
    
    let day = date.getDate();
    //let day = date.getDay();
    res.render("list", {
        listTitle: day,
        newListItem: items
    });

});

app.get("/work",function(req,res){
    res.render("list",{
        listTitle : "Work",
        newListItem:workItems
    });
});

app.post("/",function(req,res){
    var item = req.body.newItem;
    if(req.body.list==="Work")
    {
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    
});
app.get("/about",function(req,res){
    res.render("about")
});

app.post("/work",function(req,res){
    res.redirect("/work");
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});

exports.app = functions.https.onRequest(app);