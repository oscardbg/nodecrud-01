const { Router } = require('express');
const { route } = require('./index.routes');
const { renderSignupFrm, signupUser, renderSigninFrm, signinUser, logoutUser } 
    = require('../controllers/users.controller');

const router = Router();

router.get('/users/signup', renderSignupFrm);
router.post('/users/signup', signupUser);
router.get('/users/signin', renderSigninFrm);
router.post('/users/signin', signinUser);
router.get('/useres/logout', logoutUser);

module.exports = router;