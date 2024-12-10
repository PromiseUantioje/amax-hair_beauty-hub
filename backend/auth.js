const express = require('express');
const {registerUser, loginUser, logoutUser} = require('../controllers/authController');
const router = express.Router();

// configure routes

// user registration
router.post('/register', registerUser)

// user login
// router.post('/login', loginUser)

// user logout
// router.post('/logout', logoutUser)

module.exports = router;