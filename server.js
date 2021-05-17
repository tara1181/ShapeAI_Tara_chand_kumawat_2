const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.urlencoded({extended: true}));

app.get("/",function(req, res){
  res.sendfile("index.html");
});
 app.post("/",function(req, res){
   var t1 = Number(req.body.num1);
   var t2 = Number(req.body.num2);
   var final = (t1/t2)*(t1/t2);
  res.send("The Answer Is :"+final );
});

app.listen(3000,function(){
  console.log("server has started on port 3000");
});