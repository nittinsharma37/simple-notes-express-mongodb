const notesDbModel = require("../model/notesmodel");
//creating note
exports.createNote = (req,res) => {
    res.json({message: "hello from controller"});
};

// showing all notes
exports.showAllNotes = (req,res) => {
    res.json({message: "hello from controller to showallnotes route"});
};

//show one note
exports.showOneNote = (req,res) => {
    res.json({message: "hello from controller to showOneNote route"});
};


//update note
exports.updateNote = (req,res) => {
    res.json({message: "hello from controller to showOneNote route"});
};


//delete note
exports.deleteNote = (req,res) => {
    res.json({message: "hello from controller to showOneNote route"});
};



