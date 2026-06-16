const express = require('express');
const app = express();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const usermodel = require('./models/user');


app.use(cookieParser());

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));


// show register page
app.get('/', (req, res) => {
    res.render('index');
});


// CREATE USER

app.post('/create', async (req, res) => {

    let { username, email, password } = req.body;


    let hash = await bcrypt.hash(password, 10);


    let created = await usermodel.create({
        username,
        email,
        password: hash
    });


    let token = jwt.sign(
        {
            email: email
        },
        "shhh"
    );


    res.cookie("token", token);

    res.send(created);

});



// LOGIN PAGE

app.get('/login',(req,res)=>{
    res.render("login");
});



// LOGIN USER

app.post('/login', async(req,res)=>{

    let {email,password}=req.body;


    let user = await usermodel.findOne({
        email
    });


    if(!user){
        return res.send("User not found");
    }


    let result = await bcrypt.compare(
        password,
        user.password
    );


    if(result){

        let token = jwt.sign(
            {
                email:user.email
            },
            "shhh"
        );


        res.cookie("token",token);

        res.send("Login successful");

    }
    else{

        res.send("Wrong password");

    }

});

app.get('/logout', (req, res) => {
    res.clearCookie("token");
    res.send("Logged out successfully");
});



app.listen(3000, () => {
    console.log('Server running');
});
