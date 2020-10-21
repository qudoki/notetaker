const path = require("path");
const app = require("express").Router();
module.exports = function (app) {
    
    app.get("/assets/js/index.js", function (req, res) {
        res.sendFile(path.join(__dirname, "/../assets/js/index.js"));
    });

    app.get("/assets/css/styles.css", function (req, res) {
        res.sendFile(path.join(__dirname, "/../assets/css/styles.css"));
    });

    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/notes.html"));
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/index.html"));
    });

}