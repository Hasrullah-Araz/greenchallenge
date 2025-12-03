const Challenge = require('../models/Challenge');

async function list(req, res){
  try {
    const rows = await Challenge.allChallenges();
    res.json({ success:true, challenges: rows });
  } catch(err){
    console.error(err);
    res.json({ success:false, msg:'DB error' });
  }
}

async function detail(req, res){
  try {
    const ch = await Challenge.findById(req.params.id);
    if(!ch) return res.json({ success:false, msg:'Not found' });
    res.json({ success:true, challenge: ch });
  } catch(err){
    console.error(err);
    res.json({ success:false, msg:'DB error' });
  }
}

module.exports = { list, detail };
