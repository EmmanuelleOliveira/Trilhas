const express = require('express');
const app = express();
const data = require('./modules/dados.js');
const workers = require('./modules/funcionarios.js');
const birthdays = require('./modules/aniversariantes.js');
const extensions = require('./modules/ramais.js')
const port = 8080;

app.listen(port);

app.get('/aniversariantes', (req,res) => {
    let month = req.query.month;
    if (month >= 1 && month <=12) {
        if (month.length === 1){
            month = '0' + month;
            res.send(birthdays(month, data));
        } else {
            res.send(birthdays(month, data));
        }
    } else {
        console.log("O mês inserido não está entre 1 e 12");
        res.send([]);
    }
});

app.get('/funcionarios', (req,res) => {
    const department = req.query.department;
    res.send(workers(department, data));
})

app.get('/ramal', (req,res) => {
    const extension = Number(req.query.extension);
    res.send(extensions(extension, data));
})

