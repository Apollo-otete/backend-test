const express = require('express');
const app = express();


app.use(express.json())

app.post('/users', (req, res)=>{
    res.json([
        {
            "name" : "Apollo",
            "Age":"34"
        },
        
        {
            "name" : "Biggie",
            "Age":"20"
        }
   ] )
})
   

app.get('/mine', (req, res)=>{
    res.send("My first server")
})

app.listen(2000,async()=>{
    try{
        console.log("server is running on port 3000")
        }
        catch(err){
            console.log("an error has occured in the server")
        }
    })