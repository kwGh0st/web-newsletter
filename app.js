const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use("/public", express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: "true"}));

app.get("/", function(req, res) {

   res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req, res) {
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var emailAddress = req.body.emailAddress;

    console.log(firstName, lastName, emailAddress);
    
})
app.listen(3000, function(req, res) {
    console.log("Server running on port 3000...");
})