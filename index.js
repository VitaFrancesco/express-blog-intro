const express = require('express');
const app = express();
const port = 3000;
const post = require('./post.js');

app.get('/', (req, res) => {
    res.send(`<h1>Server del mio blog</h1>`)
});

app.use(express.static('public'));

app.get('/bacheca', (req, res) => {
    res.json(post);
});

app.listen(port, () => {
    console.log(`In ascolto della porta ${port}`);
});