const express = require("express");

const app = express();

app.post("/health-checkup", function (req, res) {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidney.length;

    res.send("Your kidney lenght is" + kidneyLength + "kidneys");
});

//global catches / Error- handling middleware
// Basically it will handle exceptional error in server. any error which is not defined in logic but anyhow comes.
app.use(function (err, req, res, next) {
    res.json({
        msg: "Sorry something is up with your server"
    })
})


app.listen(3000);