const express = require("express");

const app = express();

app.use(IdMiddleware);  // from this line IdMiddleware(fun) will be call in every function automatically.

// MIddleware-1 
function userMiddleware(req, res, next) {
    if(Username != "Mayank" && password != "pass") {
        res.status(403).json({
            mdg: "Incorrect inputs",
        });
    } else {
        next();
    }
};

// Middleware-2
function IdMiddleware(req, res, next) {
    if (Id != 1 && Id !=2) {
        res.status(403).json({
            msg: "Incorrect inputs",
        });
    } else {
        next();
    }
};

app.get("/health-checkup",userMiddleware, function(req, res) {
 // here add own logic/task

});

app.get("/health-checkup2",userMiddleware, IdMiddleware, function(req, res) {
    // here add own logic/task
    
   });

   //global catches / Error-handling middleware 
   // Basically it will handle exceptional error in server. any error which is not defined in logic but anyhow comes.
    app.use(function(err, req, res, next) {
        res.json({
            msg: "Sorry something is up with your server"
        })
    }) 

   app.listen(3000);