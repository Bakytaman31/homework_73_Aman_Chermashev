const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Type word in URL bar')
});

app.get('/:word', (req, res) => {
    res.send(req.params.word);
});

app.listen(port);