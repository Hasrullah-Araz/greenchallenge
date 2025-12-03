const fs = require('fs');
const db = require('../api/config/db');

async function init(){
  const sql = fs.readFileSync('sql_create_tables.sql','utf-8');
  const statements = sql.split(';').map(s=>s.trim()).filter(Boolean);
  for(const st of statements){
    try{
      await db.query(st);
    }catch(e){
      console.error('SQL error', e);
    }
  }
  console.log('DB init done');
  process.exit(0);
}

init();
