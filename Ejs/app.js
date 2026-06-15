const express = require("express");
const app = express();
const User = require("./models/user");

app.set("view engine", "ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", (req,res)=>{
    res.render("index");
});


app.get("/read", async (req,res)=>{

    let users = await User.find();

    res.render("read",{users});

});
app.post("/create", async (req,res)=>{

    let {name,email,image} = req.body;

    let user = await User.create({
        name,
        email,
        image
    });

    res.redirect("/read");
});
app.get("/delete/:id", async (req,res)=>{

    let user = await User.findOneAndDelete({
        _id:req.params.id
    });

    res.redirect("/read");

});
app.get("/edit/:id", async (req,res)=>{

    let user = await User.findById(req.params.id);

    res.render("edit",{user});

});


app.post("/update/:id", async (req,res)=>{

    let {name,email,image} = req.body;

    await User.findByIdAndUpdate(req.params.id,{
        name,
        email,
        image
    });

    res.redirect("/read");

});

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});