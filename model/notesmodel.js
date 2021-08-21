const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// NotesSchema.method("toJSON", function() {
//     const { __v, _id, ...object } = this.toObject();
//     object.noteId = _id;
//     return object;
//   });

const notesDb = mongoose.model("Notes", NotesSchema,);


module.exports = notesDb;