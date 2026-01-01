function inserting(name,course,phonenumber,whatsappnumber,email,url){
    const db = require('./db');

    db.run("INSERT INTO faculties(name,course,phonenumber,whatsappnumber,email,url) VALUES(?,?,?,?,?,?)",[name,course,phonenumber,whatsappnumber,email,url],(err)=>{
        console.log("inserted");
    })
}

module.exports = inserting;