const express = require("express");

const app = express();

app.get('/', (req, res) => {
    return res.status(200).json({ message: "Hello world" });
})

app.get('/home', (req, res) => {
    return res.status(200).json({ message: "Hello Welcome" });
})

app.listen(6000, (error) => {
    if (error) {
        console.log(error)
    }
    else{
        console.log('server is running')
    }
});