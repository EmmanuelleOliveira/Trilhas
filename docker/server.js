const express = require("express");
const cors = require("cors");
const {getClient} = require('user_pg');
const app = express();
const port = 3000;

const configCors = {
    origin: ["http://localhost:8080"],
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(express.json());
app.use(cors(configCors));
app.use(express.static('src'));
app.use(express.urlencoded({extended: true}));

app.post('/add', async (req,res) => {
    console.log("chegou aqui")
    const {email, name} = req.body;
    try {
        const client = await getClient();
        const verifyEmail = await client.query('SELECT users.email FROM public.users WHERE email = $1', [req.body.email]);
        console.log(email, name)
        if(verifyEmail.rows.length === 0) {
            const users = await client.query('INSERT INTO public.users (name, email) VALUES ($1, $2) RETURNING*', [req.body.name, req.body.email]);
            await client.end();
            res.json(users.rows[0]);
        } else {
            res.status(400).send("O email já está cadastrado");
        }
    } catch(err) {
        res.send(JSON.stringify(err))
    }
}); 

app.get('/show', async (req, res) => {
    const client = await getClient();
    const users = await client.query('SELECT * FROM public.users');
    await client.end();
    res.json(users.rows); 
});

app.listen(port, ()=> console.log('listening on port ' + port));