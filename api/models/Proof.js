const db = require('../config/db');

async function createProof({user_id, challenge_id, image_url, file_name}){
  const [r] = await db.query('INSERT INTO proofs (user_id,challenge_id,image_url,file_name) VALUES (?,?,?,?)',
    [user_id, challenge_id, image_url, file_name]);
  return r.insertId;
}

module.exports = { createProof };
