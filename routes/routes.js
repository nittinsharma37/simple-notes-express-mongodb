const express = require("express");
const router = express.Router()
//importing controller for requests
const notesController = require("../controller/notescontroller");


router.get('/' , (req , res)=>{
    res.json({message: "server is listening on home route successfully with router"});
 
 });
//API
//Creating notes
router.post('/api/notes' , notesController.createNote);
// Getting all notes
router.get('/api/notes' , notesController.showAllNotes);
 // Getting one note with id
router.get('/api/notes.:noteId' , notesController.showOneNote);
 //updating notes
 router.put('/api/notes/:noteId' , notesController.updateNote);
 //deleting notes
 router.delete('/api/notes/:noteId' , notesController.deleteNote);
 module.exports = router;