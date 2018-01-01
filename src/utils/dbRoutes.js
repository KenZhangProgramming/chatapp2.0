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
			console.log(body);
      var user = new User(body);
			console.log(user);
      user.save().then(() => {
        res.status(200).send(user);
      }).catch((e) => {
        res.status(400).send("unable to save to database")
      });
    });

  }

	routesConfig(){
		this.appRoutes();
	}
}
module.exports = dbRoutes;
