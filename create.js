const db = require('./db');

db.run(`CREATE TABLE IF NOT EXISTS faculties(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,course TEXT,phonenumber INTEGER,whatsappnumber INTEGER,email TEXT,url TEXT)`,(err)=>{
    console.log('created');
})


// name
// course
// phonenumber
// email
// url