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

notesController.renderEditFrm = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.render('notes/editNote', {note});
}

notesController.updateNote = async (req, res) => {
    const {title, description} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {title, description});
    res.redirect('/notes');
}

notesController.deleteNote = async(req, res) => {
    await Note.findOneAndDelete(req.params.id);
    res.redirect('/notes');
}

module.exports = notesController;