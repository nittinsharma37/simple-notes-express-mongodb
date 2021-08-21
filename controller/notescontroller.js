const notesDbModel = require("../model/notesmodel");


//creating note
exports.createNote = (req, res) => {
    //validating request 
    if (!req.body.content) {
        return res.status(404).send({
            message: "Note Cannot be empty"
        });
    }

    //creating a note
    const note = new notesDbModel({
        title: req.body.title || "Untitled Note!",
        content: req.body.content
    });

    //saving note in the database
    try {
        note.save().then((data) => {
            res.send(data)
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "There is a problem while creating Notes!"
            });
        });
    } catch (error) {
        console.log(error)
    }


};

// showing all notes
exports.showAllNotes = (req, res) => {
    res.json({
        message: "hello from controller to showallnotes route"
    });
};

//show one note
exports.showOneNote = (req, res) => {
    res.json({
        message: "hello from controller to showOneNote route"
    });
};


//update note
exports.updateNote = (req, res) => {
    res.json({
        message: "hello from controller to showOneNote route"
    });
};


//delete note
exports.deleteNote = (req, res) => {
    res.json({
        message: "hello from controller to showOneNote route"
    });
};