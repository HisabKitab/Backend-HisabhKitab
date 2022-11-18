const express = require('express');
const {login, register, logout, updatePassword, updateUser,verifyUser} = require('./controller');
// eslint-disable-next-line new-cap
const router = express.Router();

// Register through Phone Number
router.route('/register').post(register);
router.route('/verifyUser').post(verifyUser);
// /api/v1/auth/register
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/update/:id').put(updateUser);
// router.route('/verify').post(verifyPhoneOtp);
router.route('/reset').post(updatePassword);
module.exports = router;
