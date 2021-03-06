const fs = require("fs");
let data = JSON.parse(fs.readFileSync("././Develop/db/db.json", "utf-8"));

// const app = require("express").Router();

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(data);
    });

    app.post("/api/notes/:id", function (req, res) {
        res.json(data[Number(req.params.id)]);
    })

    app.post("/api/notes", function (req, res) {

        let newNote = req.body;
        let uniqueId = (data.length).toString();
        console.log(uniqueId);
        newNote.id = uniqueId;
        data.push(newNote);

        fs.writeFileSync("././Develop/db/db.json", JSON.stringify(data), function (err) {
            if (err) throw (err);
        });

        res.json(data);

    });


    app.delete("/api/notes/:id", function (req, res) {

        let noteId = req.params.id;
        let newId = 0;
        console.log(`Deleting note with id ${noteId}`);
        data = data.filter(currentNote => {
            return currentNote.id != noteId;
        });
        //Go through and make what was 1, 2, 4, 5 --> 1, 2, 3, 4
        for (currentNote of data) {
            currentNote.id = newId.toString();
            newId++;
        }
        fs.writeFileSync("././Develop/db/db.json", JSON.stringify(data));
        res.json(data);
    });

}