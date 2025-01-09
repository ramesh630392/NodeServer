const express = require('express');

const app = express();

app.get('/test', (req, res)=>{
    res.send("hii")
})

app.listen(3001, ()=>{console.log("CN")})