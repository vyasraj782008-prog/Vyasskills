const db = require('./db');
db.all("SELECT * FROM faculties",(err,rows)=>{
    console.log(rows);
})