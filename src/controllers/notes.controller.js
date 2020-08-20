const notesController = {};

notesController.renderNoteFrm = (req, res) => {
    res.render('notes/newNote');
}

notesController.createNote = (req, res) => {
    res.send(req.body);
}

notesController.renderNotes = (req, res) => {

}

notesController.renderEditFrm = (req, res) => {
    
}

notesController.updateNote = (req, res) => {

}

notesController.deleteNote = (req, res) => {

}

module.exports = notesController;