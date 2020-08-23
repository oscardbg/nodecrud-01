const { Router } = require('express');
const { renderNoteFrm, createNote, renderNotes, renderEditFrm, updateNote, deleteNote } 
    = require('../controllers/notes.controller');
const { render } = require('../server');

const { isAuthenticated } = require('../helpers/auth');

const router = Router();

router.get('/notes/add', isAuthenticated, renderNoteFrm);
router.post('/notes/new', isAuthenticated, createNote);
router.get('/notes', isAuthenticated, renderNotes);
router.get('/notes/edit/:id', isAuthenticated, renderEditFrm);
router.put('/notes/update/:id', isAuthenticated, updateNote);
router.delete('/notes/delete/:id', isAuthenticated, deleteNote);

module.exports = router;