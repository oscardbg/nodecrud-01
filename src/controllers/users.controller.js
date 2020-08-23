const User = require('../models/user');
const passport = require('passport');

const usersController = {};

usersController.renderSignupFrm = (req, res) => {
    res.render('users/signup');
}

usersController.signupUser = async (req, res) => {
    let errors = [];
    const { name, email, password, passwordRep } = req.body;
    if(password != passwordRep){
        errors.push({text: 'Passwords do not match'});
    }
    if(password.length < 4){
        errors.push({text: 'Password must contain 4 characters minimum'});
    }
    if(name === '' || email === '' || password === '' || passwordRep === ''){
        errors.push({text: 'All fields are mandatory'});
    }
    if(errors.length > 0){
        res.render('users/signup', {name, email, errors});
    }else{
        const emailUser = await User.findOne({email: email});
        if(emailUser){
            req.flash('error_msg', 'Email is already registered');
            res.redirect('/users/signup');
        }else{
            const user = new User({name, email, password});
            user.password = await user.encryptPassword(password);
            await user.save();
            req.flash('success_msg', 'Sign in successfully');
            res.redirect('/users/signin');
        }
    }
}

usersController.renderSigninFrm = (req, res) => {
    res.render('users/signin');
}

usersController.signinUser = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/notes',
    failureFlash: true
})

usersController.logoutUser = (req, res) => {
    res.send('loged out');
}

module.exports = usersController;