const { Router } = require('express');
const { renderNoteFrm, createNote, renderNotes, renderEditFrm, updateNote, deleteNote } 
    = require('../controllers/notes.controller');
const { render } = require('../server');

const router = Router();

router.get('/notes/add', renderNoteFrm);
router.post('/notes/add', createNote);
router.get('/notes', renderNotes);
router.get('/notes/edit/:id', renderEditFrm);
router.put('/notes/edit/:id', updateNote);
router.delete('/notes/delete/:id', deleteNote);

module.exports = router;