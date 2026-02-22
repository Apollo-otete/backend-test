const express = require('express');
const app = express();


app.use(express.json())

app.get('/users', (req, res)=> {
    res.json([
        
         {
            id: 1,
        "name": "Apollo Brian",
        "age": 22,
        "email": "apollojunior@gmail.com",
        "studentReg": "MMUST2024001",
        "course": "Cyber Security",
        "yearOfStudy": 2,
        "homeArea": "Migori, Kenya",
        "gpa":4.5
    },
    {
            id: 2,
        "name": "Omondi Fredrick",
        "age": 22,
        "email": "omondifredrick@gmail.com",
        "studentReg": "MMUST2024002",
        "course": "Data Science",
        "yearOfStudy": 2,
        "homeArea": "Homa Bay, Kenya",
        "gpa": 4.6
    },
    {
            id: 3,
        "name": "Eve Carols",
        "age": 21,
        "email": "evecarols@gmail.com",
        "studentReg": "MMUST2024003",
        "course": "Developer",
        "yearOfStudy": 2,
        "homeArea": "Kisumu, Kenya",
        "gpa": 4.7
    },
    {
            id: 4,
        "name": "Masuka Milton",
        "age": 42,
        "email": "masukamilton@gmail.com",
        "studentReg": "MMUST2024004",
        "course": "Information Technology",
        "yearOfStudy": 1,
        "homeArea": "Siaya, Kenya",
        "gpa":4.4
    },
    {         id: 5,
        "name": "Willington Juma",
        "age": 31,
        "email": "willingtonjuma@gmail.com",
        "studentReg": "MMUST2024005",
        "course": "Software Engineering",
        "yearOfStudy": 3,
        "homeArea": "Nairobi, Kenya",
        "gpa": 5.0
    }
]);
});
   

app.get('/users', (req, res)=>{
    res.json({"message": "My first server"})
})

const port = 3000;
app.listen(port,async()=>{
    try{
        console.log(`server is running on port ${port}`)
        }
    catch(error){
            console.log("an error has occured in the server")
        }
    })
