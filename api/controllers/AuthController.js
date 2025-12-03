const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

async function register(req, res){
  const { username, email, password } = req.body;
  if(!username || !email || !password) return res.json({ success:false, msg:'Lengkapi data' });
  try {
    const exists = await User.findByUsername(username);
    if(exists) return res.json({ success:false, msg:'Username sudah dipakai' });
    const hash = await bcrypt.hash(password, 10);
    const user = await User.createUser({ username, email, password: hash });
    res.json({ success:true, user });
  } catch(err){
    console.error(err);
    res.status(500).json({ success:false, msg:'Server error' });
  }
}

async function login(req, res){
  const { username, password } = req.body;
  if(!username || !password) return res.json({ success:false, msg:'Lengkapi data' });
  try {
    const user = await User.findByUsername(username);
    if(!user) return res.json({ success:false, msg:'User tidak ditemukan' });
    const ok = await bcrypt.compare(password, user.password);
    if(!ok) return res.json({ success:false, msg:'Password salah' });
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ success:true, token, user: { id: user.id, username: user.username, points: user.points||0 }});
  } catch(err){
    console.error(err);
    res.status(500).json({ success:false, msg:'Server error' });
  }
}

module.exports = { register, login };
