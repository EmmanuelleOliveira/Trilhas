const express = require ("express");
const app = express ();
const cors = require ("cors");
const port = 3000;

app.use(cors());
app.use(express.json());

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get('/', function(req,res) {
    let randomNumber = getRandomIntInclusive(0,10);
    let delay = getRandomIntInclusive(0,5000);
    randomNumber = JSON.stringify (randomNumber);
    setTimeout (() => res.json({number:randomNumber}),delay);
})

app.listen(port)