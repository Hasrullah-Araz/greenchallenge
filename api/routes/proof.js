const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const uploadDir = path.join(__dirname,'../../uploads');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const unique = Date.now() + '-' + Math.round(Math.random()*1E9);
    cb(null, unique + '-' + file.originalname.replace(/\s+/g,'_'));
  }
});
const upload = multer({ storage });

const Proofs = require('../controllers/ProofsController');

router.post('/', upload.single('proof'), Proofs.upload);

module.exports = router;
