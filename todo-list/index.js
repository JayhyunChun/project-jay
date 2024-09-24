let express = require("express");
let app = express();

app.listen(8000, function(){
    console.log("App is running...");
});

app.get("/", function(req, res){
    res.sendFile(__dirname + '/application.html');
});