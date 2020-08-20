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
    res.redirect('/notes');
}

notesController.renderNotes = async (req, res) => {
    const notes = await Note.find();
    res.render('notes/notes', {notes});
}

notesController.renderEditFrm = (req, res) => {
    
}

notesController.updateNote = (req, res) => {

}

notesController.deleteNote = async(req, res) => {
    await Note.findOneAndDelete(req.params.id);
    res.redirect('/notes');
}

module.exports = notesController;