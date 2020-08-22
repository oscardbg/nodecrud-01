const User = require('../models/user');

const usersController = {};

usersController.renderSignupFrm = (req, res) => {
    res.render('users/signup');
}

usersController.signupUser = (req, res) => {
    res.send('signed up');
}

usersController.renderSigninFrm = (req, res) => {
    res.render('users/signin');
}

usersController.signinUser = (req, res) => {
    res.send('signed in');
}

usersController.logoutUser = (req, res) => {
    res.send('loged out');
}

module.exports = usersController;