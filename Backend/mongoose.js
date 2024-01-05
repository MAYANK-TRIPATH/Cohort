/** What we will learn here
 * 1- Mongoose liberary
 * 2- Connecting backend with database useing mongoose
 * 3- three endpoints for singup, signin, jwt auth.
 * 
 */

const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose.connect("mongodb+srv://mayank:mayank%40123@cluster0.vo9vyrf.mongodb.net/userappnew")

const User = mongoose.model('Users', { name: String, email: String, 
    password: String});

app.post("/signup", async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({ email: username});
    if (existingUser) {
        return res.status(400).send("Username already exists");
    }

    const user = new user({
        name: name,
        email: username,
        password: password
    });

user.save();
res.json({
    "msg": "User created succesfully"
})
})