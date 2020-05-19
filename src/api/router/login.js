var express = require('express');
let loginRouter = express.Router();

const fs = require('fs');
const userData = 'src/api/data/user.json';
/**
 * 
 * Middleware to log time which is specific to customer router
 * 
 **/
loginRouter.use(function timeLog(req, res, next) {
    console.log('store router Time: ', Date.now());
    // Sanitize data here
    next();
})

loginRouter.post('/', function (req,res) {  
    
    let username = req.body.username;
    let password = req.body.password;

    fs.readFile(userData, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        var details = JSON.parse(data);
        var userRegistered = false;
        for (var iter = 0; iter < details.userData.length; iter++) {
            if (details.userData[iter].username === username &&
                details.userData[iter].password === password){
                    userRegistered = true;
            }
        }
       res.status(200).send({loggedIn:userRegistered})
    })  
})


export default loginRouter;
