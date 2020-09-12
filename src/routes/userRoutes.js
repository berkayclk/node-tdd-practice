const express = require('express');
const router = express.Router();

const UserController = require('../domains/User/userController');

router.post('/', UserController.saveNewUser);

module.exports = router;
