const express = require ("express");
const server = express ();

const port = 8080;

server.use(express.static('public'));

server.listen(port, error => {
    if (error) {
        return console.log(`Error ${error}`);
    } else {
        console.log(`Listening at port ${port}`);
    }
})