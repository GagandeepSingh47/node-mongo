const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');

router.post('/create', userController.create);

module.exports = router