const express = require("express");

const app = express();

app.get('/',(req,res)=> {
    return res.sendStatus(200).json({message:"Hello world"});
})

app.listen(6000);