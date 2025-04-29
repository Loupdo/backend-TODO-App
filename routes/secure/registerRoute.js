const express = require('express');
const router = express.Router();
const todoController = require('../../controllers/todo.controller');
const { jsonCheckMiddleware, userMiddleware } = require('../../middleware/errorMiddleware')

// POST route to register user
router.post('/', jsonCheckMiddleware, userMiddleware, todoController.createUser);

module.exports = router;