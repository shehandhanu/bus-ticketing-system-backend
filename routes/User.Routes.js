const express = require('express');
const router = express.Router();

const { registerUser,
    loginUser,
    getUserProfile,
    logout,
    updateProfile,
    checkUser } = require('../controllers/User.Controller');
const { isAuthenticatedUser, authorizeRoles } = require('../utils/authenticator')
const { getTotalEarning } = require('../controllers/Count.Controller')

//Register User
router.route('/signup').post(registerUser);

//Login 
router.route('/signin').post(loginUser);

//Logout
router.route('/logout').get(logout)

//Get User Profile
router.route('/profile').get(isAuthenticatedUser, getUserProfile);

//Update User Profile
router.route('/profileupdate').put(isAuthenticatedUser, updateProfile);

// Admin Functions
//Check User Route 
router.route('/checkuser/:id/:tid').get(isAuthenticatedUser, checkUser);

//Logout
router.route('/admindata').get(getTotalEarning)

module.exports = router;