const express = require('express');
const app = express();
const port = 3000;

const User = require('./models/user');
const Post = require('./models/post');

app.get('/create', async (req, res) => {
    const create = await User.create({
        name: 'Bhargav',
        email: 'bhargav@gmail.com',
        age: 22
    });

    res.send(create);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});