const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/challenges', require('./challenges'));
router.use('/proof', require('./proof'));
router.use('/user', require('./user'));

router.get('/test', (req, res) => res.json({ success:true, message: 'API is working' }));

module.exports = router;
