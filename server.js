//Dependencies
const express = require("express");
const fs = require("fs");

//Sets up Express
var app = express();
var PORT = process.env.PORT || 8080;

//Express ap to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("assets", express.static("assets"));

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

//Server starts listening
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});