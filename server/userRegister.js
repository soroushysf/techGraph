/**
 * Created by soroush on 3/31/17.
 */

module.exports = function (express, mongoose, app, config, passport, User) {


// connect to database
    mongoose.connect(config.database);

// pass passport for configuration
    require('./config/passport');

// bundle our routes
    var apiRoutes = express.Router();

// create a new user account (POST http://localhost:8080/api/signup)
    apiRoutes.post('/signup', function(req, res) {
        if (!req.body.email || !req.body.password) {
            res.json({success: false, msg: 'Please pass email and password.'});
        } else {
            var user = new User();

            user.email = req.body.email;
            user.password = req.body.password;

            user.setPassword(req.body.password);

            user.save(function (err) {
                if (err) {
                    return res.json({success: false, msg: 'Email already exists.'});
                } else {
                    var token;
                    token = user.generateJwt();
                    res.status(200);
                    res.json({
                        "token": token,
                        success: true,
                        msg: "successfully created user!"
                    });
                }
            });
        }
    });

// connect the api routes under /api/*
    app.use('/api', apiRoutes);

};

