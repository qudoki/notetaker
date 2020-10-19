var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
const apiRoutes = require("./routes/apiroutes");
const htmlRoutes = require("./routes/htmlroutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});