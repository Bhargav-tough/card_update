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

app.get("/post/create", async function (req, res) {

    let post = await Post.create({
        postdata: "hello saare log kaise ho",
        user: "6a32e69447aff0cd409b0a9c"
    });

    let user = await User.findOne({
        _id: "6a32e69447aff0cd409b0a9c"
    });

    user.posts.push(post._id);

    await user.save();

    res.send({post,user});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});