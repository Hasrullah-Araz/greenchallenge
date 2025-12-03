const Proof = require('../models/Proof');
const User = require('../models/User');

async function upload(req, res){
  const user_id = req.body.user_id;
  if(!user_id || !req.file) return res.json({ success:false, msg:'Missing data or file' });
  try {
    const filePath = '/uploads/' + req.file.filename;
    await Proof.createProof({ user_id, challenge_id: null, image_url: filePath, file_name: req.file.originalname });
    await User.incrementProofs(user_id);
    res.json({ success:true, file: filePath });
  } catch(err){
    console.error(err);
    res.json({ success:false, msg:'DB error' });
  }
}

module.exports = { upload };
