/*
* Creating the REST api for the Mongodb
*
*/
const _ = require('lodash');

// Require User model in dbRoutes
var User = require('./models/user');
class dbRoutes{

	constructor(app){
		this.app = app;
	}

	/* creating app Routes starts */
	appRoutes(){
		this.app.post('/users/register',(req,res) =>{
      var body = _.pick(req.body, ['name', 'password']);
      var user = new User(body);
      user.save().then(() => {
        res.status(200).send(user);
      }).catch((e) => {
        res.status(400).send("unable to save to database")
      });
    });

		this.app.post('/users/login', (req, res) => {
		  var body = _.pick(req.body, ['name', 'password']);

			// Find the user's name and password in the database
		  User.findByCredentials(body.name, body.password).then((user) => {
		    return user.generateAuthToken().then((token) => {
		      res.header('x-auth', token).send(user);
		    });
		  }).catch((e) => {
		    res.status(400).send();
		  });
		});
  }

	routesConfig(){
		this.appRoutes();
	}
}
module.exports = dbRoutes;
