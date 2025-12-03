const db = require('../config/db');

async function findByUsername(username){
  const [rows] = await db.query('SELECT * FROM users WHERE username = ? LIMIT 1', [username]);
  return rows[0];
}

async function findById(id){
  const [rows] = await db.query('SELECT id,username,email,points,proofs,badges FROM users WHERE id = ? LIMIT 1', [id]);
  return rows[0];
}

async function createUser({username,email,password}){
  const [r] = await db.query('INSERT INTO users (username,email,password) VALUES (?,?,?)', [username,email,password]);
  return { id: r.insertId, username, email };
}

async function incrementProofs(userId){
  await db.query('UPDATE users SET proofs = COALESCE(proofs,0)+1, points = COALESCE(points,0)+10 WHERE id = ?', [userId]);
}

module.exports = { findByUsername, findById, createUser, incrementProofs };
