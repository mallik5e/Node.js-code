const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.patch('/:userId/profile', UserController.updateProfile);

module.exports = router;
