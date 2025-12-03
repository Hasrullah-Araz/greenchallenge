const express = require('express');
const router = express.Router();
const U = require('../controllers/UserController');

router.get('/profile', U.profile);

module.exports = router;
