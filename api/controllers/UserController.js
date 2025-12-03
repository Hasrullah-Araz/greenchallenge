const User = require('../models/User');

async function profile(req, res){
  const id = req.query.id;
  if(!id) return res.json({ success:false, msg:'Missing id' });
  try {
    const user = await User.findById(id);
    if(!user) return res.json({ success:false, msg:'User not found' });
    res.json(user);
  } catch(err){
    console.error(err);
    res.json({ success:false, msg:'DB error' });
  }
}

module.exports = { profile };
