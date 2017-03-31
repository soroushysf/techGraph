/**
 * Created by soroush on 3/31/17.
 */


module.exports = function (express, mongoose, app, config, passport, User) {

    var apiRoutes = express.Router();
    var jwt = require('express-jwt');



    apiRoutes.post('/login', function(req, res) {

        passport.authenticate('local', function(err, user, info){
            var token;

            // If Passport throws/catches an error
            if (err) {
                res.status(404).json(err);
                return;
            }

            // If a user is found
            if(user){
                token = user.generateJwt();
                res.status(200);
                res.json({
                    "token" : token,
                    msg : "you have successfully logged in"
                });
            } else {
                // If user is not found
                res.status(401).json(info);
            }
        })(req, res);

    });

    app.use('/api', apiRoutes);


};