const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('faculties.db',(err)=>{
    if(err){
        console.log("err");
    }
    else{
        console.log("connected");
    }
})

module.exports = db;