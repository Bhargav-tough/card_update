// // 
// const express = require("express");

// const app = express();
// const bycrpt = require("bcrypt");
// app.use (require("cookie-parser")());
// //encrption
// app.get("/", (req, res) => {
//     bycrpt.hash("123456", 10, (err, hash) => {
//         res.send(hash);
//     });
// });
// //decrption or compare
// app.get("/compare", (req, res) => {
//     bycrpt.compare("123456", "$2b$10$wBp3ItiYZvthAxEg9SVhc.lVjb4Zf.gPX5MCf/n9r.pajry7DCxqK", (err, isMatch) => {
//         res.send(isMatch);
//     });
// });

// app.listen(3000);
// const express = require("express");
// const app = express();
// const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");

// app.use(cookieParser());


// app.get("/", (req, res) => {

//     const token = jwt.sign(
//         { name: "Bhargav" },
//         "secretkey"
//     );

//     res.cookie("token", token);

//     res.send("Token is set in cookie");
// });


// app.get("/verify", (req, res) => {

//     const token = req.cookies.token;

//     const data = jwt.verify(
//         token,
//         "secretkey"
//     );

//     res.send(data);

// });


// app.listen(3000);