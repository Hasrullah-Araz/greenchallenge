const db = require('../config/db');

async function allChallenges(){
  const [rows] = await db.query('SELECT id,title,description,reward_points FROM challenges ORDER BY id');
  return rows;
}

async function findById(id){
  const [rows] = await db.query('SELECT * FROM challenges WHERE id = ? LIMIT 1', [id]);
  return rows[0];
}

module.exports = { allChallenges, findById };
