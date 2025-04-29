const express = require('express');
const router = express.Router();
const todoController = require('../../controllers/todo.controller');
const jwtMiddleware = require('../../middleware/jwtMiddleware');
const { jsonCheckMiddleware, taskMiddleware } = require('../../middleware/errorMiddleware')

// GET route to find todos
router.get('/', jwtMiddleware, todoController.findTodos);

// PATCH route to update todos
router.patch('/', jwtMiddleware, jsonCheckMiddleware, taskMiddleware, todoController.updateTodos);

module.exports = router;