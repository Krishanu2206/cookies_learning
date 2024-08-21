const express = require("express");
const app=express();

app.get('/', (req, res)=>{
    res.setHeader("set-cookie", ["setfromserver = 1"])
    res.sendFile(`${__dirname}/index.html`);
})

app.get('/path1', (req, res)=>{
    res.send(`I have been sent cookies in path 1 ${req.headers.cookie}`);
})

app.get('/path2', (req, res)=>{
    res.send(`I have been sent cookies in path 2 ${req.headers.cookie}`);
})

const port = 5000;
app.listen(port, ()=>{
    console.log(`server listening on port ${port}`);
})