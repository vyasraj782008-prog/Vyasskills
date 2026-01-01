function finding(){

const db = require('./db');
    
db.all("SELECT * FROM faculties WHERE course = 'Frontend(HTML,CSS,JS + Projects)' ",(err,data)=>{
    
    console.log(data);
});


}

module.exports = finding;