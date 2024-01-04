// Basic Example

/*const express = require("express");

function calulateSum(n) {
    let ans =0;
    for(let i=1; i<n; i++) {
        ans = ans + i;
    }
    return ans;
}

const app = express();

app.get("/", function(req, res) {
    const n = req.query.n;
    const ans = calulateSum(n)
    res.send("Your answer is " +  ans);
})

app.listen(3000); */

// Creating an in-memory hospital

const express = require ("express");
const app = express();

//Its kind of data (but we will use database later)
const user = [{
    name : "Mayank",
    kidneys : [{
        healthy: false
    }] 
     
}];

app.use(express.json());

// GET 
app.get("/", function(req, res) {
    const mayankKidneys = user[0].kidneys;
    const numberOfkidneys = mayankKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0; i<mayankKidneys.length; i++) {
        if (mayankKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfkidneys + 1;
        }
    }

    const numberOfUnHealthyKidneys = numberOfkidneys - numberOfHealthyKidneys;
    res.json({
        numberOfkidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys
        
    })
})


//POST
app.post("/", function(req, res) {

    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})


//PUT
app.put("/", function(req, res) {
    for (let i =0; i<user[0].length; i++) {
        user[0].kidneys[i].healthy = true;
    }
    res.json({});
})


//Delete
app.delete("/", function(req, res) {
    const newKidneys = [];
    for (let i =0; i<user[0].kidneys.length; i++) {
        if( user[0].kidneys[i].healthy) {
            newKidneys.push({
            healthy: true
        })
    }
}
user[0].kidneys = newKidneys;
res.json({msg: "done"})
})


app.listen(3000);