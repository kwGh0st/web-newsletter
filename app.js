const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");

const app = express();

app.get("/", function(req, res) {
   res.sendFile(__dirname + "/signup.html");
})


app.listen(3000, function(req, res) {
    console.log("Server running on port 3000...");
})