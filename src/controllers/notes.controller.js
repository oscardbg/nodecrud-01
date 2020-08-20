const Note = require('../models/note');

const notesController = {};

notesController.renderNoteFrm = (req, res) => {
    res.render('notes/newNote');
}

notesController.createNote = async (req, res) => {
    const { title, description } = req.body;
    const note = new Note({
        title, description
    });
    await note.save();
    res.send(req.body);
}

notesController.renderNotes = async (req, res) => {
    const notes = await Note.find();
    res.render('notes/notes', {notes});
}

notesController.renderEditFrm = (req, res) => {
    
}

notesController.updateNote = (req, res) => {

}

notesController.deleteNote = (req, res) => {

}

module.exports = notesController;