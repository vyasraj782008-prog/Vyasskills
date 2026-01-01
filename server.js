const express = require('express');
const app = express();
const fs = require('fs');
const insert = require('./insert');
const inserting = require('./insert');
const db = require("./db");

app.use(express.urlencoded({extended : true}));
// app.get('/',(req,res)=>{
//     fs.readFile('index.html','utf8',(err,data)=>{
//         res.send(data);
//     })
// })


app.post('/submit',(req,res)=>{
    const name = req.body.name;
    const course = req.body.course;
    const phonenumber = req.body.phonenumber;
    const whatsappnumber = req.body.whatsappnumber;
    const email = req.body.email;
    const url = req.body.url;

    inserting(name,course,phonenumber,whatsappnumber,email,url);
    res.send("sended sucessfully. You will get call or message from our team for connect with students and teach them.");

    
    
})
app.get('/faculties',(req,res)=>{
    fs.readFile('forfaculties.html','utf8',(err,data)=>{
        res.send(data);
    })
})




app.get('/frontenddevelopment',(req,res)=>{
    fs.readFile('frontenddevelopment.html','utf8',(err,data)=>{
         
        db.all("SELECT * FROM faculties WHERE course ='Frontend(HTML,CSS,JS + Projects)' ",(err,rows)=>{      
            let finaldata = "<br>";
            for(let i =0 ; i < rows.length ; i++){

                let link = rows[i].url;
                finaldata = finaldata + (
                "<span>Name:  "+ rows[i].name + "<br>Course:  " + rows[i].course + "<br>Phone Number:  " + rows[i].phonenumber + "<br>Whatsapp Number:  " + rows[i].whatsappnumber + "<br>Email:  " + rows[i].email + "<br>Whatsapp Group URL:  " + rows[i].url +"<br><br> </span> "
                    );
                }
                
            res.send(data+"<main id='main2'>"+finaldata+"</main>");
        })
    })
})


app.get('/backenddevelopment',(req,res)=>{
    fs.readFile('backenddevelopment.html','utf8',(err,data2)=>{
         
        db.all("SELECT * FROM faculties WHERE course = 'backend(Node js,SQL + Projects)'",(err,rows2)=>{
            
            let finaldata2 = "<br>";

            for(let i = 0 ; i < rows2.length ; i++){
                finaldata2 = finaldata2 + ("<span>Name:  "+ rows2[i].name + "<br>Course:  " + rows2[i].course + "<br>Phone Number:  " + rows2[i].phonenumber + "<br>Whatsapp Number:  " + rows2[i].whatsappnumber + "<br>Email:  " + rows2[i].email + "<br>Whatsapp Group URL:  " + rows2[i].url + "<br><br> </span> ");
            }

            res.send(data2 + "<main id='main2'>"+finaldata2+"</main>");

        })
        
    })
})



app.get('/fullstackdevelopment',(req,res)=>{
    fs.readFile('fullstackdevelopment.html','utf8',(err,data3)=>{
         
        db.all("SELECT * FROM faculties WHERE course = 'Full Stack Development'",(err,rows3)=>{
            
            let finaldata3 = "<br>";

            for(let i = 0 ; i < rows3.length ; i++){
                finaldata3 = finaldata3 + ("<span>Name:  "+ rows3[i].name + "<br>Course:  " + rows3[i].course + "<br>Phone Number:  " + rows3[i].phonenumber + "<br>Whatsapp Number:  " + rows3[i].whatsappnumber + "<br>Email:  " + rows3[i].email + "<br>Whatsapp Group URL:  " + rows3[i].url + "<br><br> </span> ");
            }

            res.send(data3 + "<main id='main2'>"+finaldata3+"</main>");

        })
        
    })
})





app.get('/spokenenglish',(req,res)=>{
    fs.readFile('spokenenglish.html','utf8',(err,data3)=>{
         
        db.all("SELECT * FROM faculties WHERE course = 'Spoken English'",(err,rows3)=>{
            
            let finaldata3 = "<br>";

            for(let i = 0 ; i < rows3.length ; i++){
                finaldata3 = finaldata3 + ("<span>Name:  "+ rows3[i].name + "<br>Course:  " + rows3[i].course + "<br>Phone Number:  " + rows3[i].phonenumber + "<br>Whatsapp Number:  " + rows3[i].whatsappnumber + "<br>Email:  " + rows3[i].email + "<br>Whatsapp Group URL:  " + rows3[i].url + "<br><br> </span> ");
            }

            res.send(data3 + "<main id='main2'>"+finaldata3+"</main>");

        })
        
    })
})


app.get('/ccc',(req,res)=>{
    fs.readFile('ccc.html','utf8',(err,data3)=>{
         
        db.all("SELECT * FROM faculties WHERE course = 'CCC(Basic Computer skills)'",(err,rows3)=>{
            
            let finaldata3 = "<br>";

            for(let i = 0 ; i < rows3.length ; i++){
                finaldata3 = finaldata3 + ("<span>Name:  "+ rows3[i].name + "<br>Course:  " + rows3[i].course + "<br>Phone Number:  " + rows3[i].phonenumber + "<br>Whatsapp Number:  " + rows3[i].whatsappnumber + "<br>Email:  " + rows3[i].email + "<br>Whatsapp Group URL:  " + rows3[i].url + "<br><br> </span> ");
            }

            res.send(data3 + "<main id='main2'>"+finaldata3+"</main>");

        })
        
    })
})





app.get('/python',(req,res)=>{
    fs.readFile('python.html','utf8',(err,data3)=>{
         
        db.all("SELECT * FROM faculties WHERE course = 'Python'",(err,rows3)=>{
            
            let finaldata3 = "<br>";

            for(let i = 0 ; i < rows3.length ; i++){
                finaldata3 = finaldata3 + ("<span>Name:  "+ rows3[i].name + "<br>Course:  " + rows3[i].course + "<br>Phone Number:  " + rows3[i].phonenumber + "<br>Whatsapp Number:  " + rows3[i].whatsappnumber + "<br>Email:  " + rows3[i].email + "<br>Whatsapp Group URL:  " + rows3[i].url + "<br><br> </span> ");
            }

            res.send(data3 + "<main id='main2'>"+finaldata3+"</main>");

        })
        
    })
})





app.get('/java',(req,res)=>{
    fs.readFile('java.html','utf8',(err,data3)=>{
         
        db.all("SELECT * FROM faculties WHERE course = 'Java'",(err,rows3)=>{
            
            let finaldata3 = "<br>";

            for(let i = 0 ; i < rows3.length ; i++){
                finaldata3 = finaldata3 + ("<span>Name:  "+ rows3[i].name + "<br>Course:  " + rows3[i].course + "<br>Phone Number:  " + rows3[i].phonenumber + "<br>Whatsapp Number:  " + rows3[i].whatsappnumber + "<br>Email:  " + rows3[i].email + "<br>Whatsapp Group URL:  " + rows3[i].url + "<br><br> </span> ");
            }

            res.send(data3 + "<main id='main2'>"+finaldata3+"</main>");

        })
        
    })
})




app.get('/pythondsaproject',(req,res)=>{
    fs.readFile('pythondsaproject.html','utf8',(err,data3)=>{
         
        db.all("SELECT * FROM faculties WHERE course = 'Python + DSA + Project'",(err,rows3)=>{
            
            let finaldata3 = "<br>";

            for(let i = 0 ; i < rows3.length ; i++){
                finaldata3 = finaldata3 + ("<span>Name:  "+ rows3[i].name + "<br>Course:  " + rows3[i].course + "<br>Phone Number:  " + rows3[i].phonenumber + "<br>Whatsapp Number:  " + rows3[i].whatsappnumber + "<br>Email:  " + rows3[i].email + "<br>Whatsapp Group URL:  " + rows3[i].url + "<br><br> </span> ");
            }

            res.send(data3 + "<main id='main2'>"+finaldata3+"</main>");

        })
        
    })
})





app.get('/javadsaproject',(req,res)=>{
    fs.readFile('javadsaproject.html','utf8',(err,data3)=>{
         
        db.all("SELECT * FROM faculties WHERE course = 'Java + DSA + Project'",(err,rows3)=>{
            
            let finaldata3 = "<br>";

            for(let i = 0 ; i < rows3.length ; i++){
                finaldata3 = finaldata3 + ("<span>Name:  "+ rows3[i].name + "<br>Course:  " + rows3[i].course + "<br>Phone Number:  " + rows3[i].phonenumber + "<br>Whatsapp Number:  " + rows3[i].whatsappnumber + "<br>Email:  " + rows3[i].email + "<br>Whatsapp Group URL:  " + rows3[i].url + "<br><br> </span> ");
            }

            res.send(data3 + "<main id='main2'>"+finaldata3+"</main>");

        })
        
    })
})


app.listen(3000,()=>{
    console.log('running');
})