const express = require('express');
const todoController = require('../controllers/todoController.js');
const router = express.Router();

router.get("", todoController.getAll);

module.exports = router;