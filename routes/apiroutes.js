let data = require("../db/db.json");

const app = require("express").Router();

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        console.log(data);
        return data;
    });

    app.post("/api/notes", function(req, res) {
        data.oush(json.stringify(req.body));
    });

    app.post("/api/notes/:id", function(req, res) {
        console.log("test" + id);
    })
}