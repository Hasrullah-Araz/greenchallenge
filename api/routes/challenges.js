const express = require('express');
const router = express.Router();
const C = require('../controllers/ChallengesController');

router.get('/', C.list);
router.get('/:id', C.detail);

module.exports = router;
