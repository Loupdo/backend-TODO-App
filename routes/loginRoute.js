const express = require('express');
const router = express.Router(); 4
const { userController } = require('../controllers/user.controller');

// GET Route to handle user login
router.get('/', userController);

module.exports = router;