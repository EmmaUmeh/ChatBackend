const express = require('express');
const router = express.Router();

const messagesController = require('../controllers/messages');
const usersController = require('../controllers/users');

// Define routes for messages
router.get('/messages', messagesController.getAllMessages);
router.post('/messages', messagesController.createMessage);
router.delete('/messages/:id', messagesController.deleteMessage);

// Define routes for users
router.get('/users', usersController.getAllUsers);
router.get('/users/:id', usersController.getUserById);
router.post('/users', usersController.createUser);

module.exports = router;
