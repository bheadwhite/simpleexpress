const express = require('express'),
    app = express();

    let counter = 0;

    app.get(`/api/test`, (req, res) =>{
        res.send({counter: ++counter})
    })

    app.post('/api/test', (req, res) =>{
        res.send({counter: ++counter})
    })

    app.listen(4000, _=>{
        console.log('yo im running')
    })