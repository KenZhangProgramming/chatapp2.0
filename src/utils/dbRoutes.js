/*
* Creating the REST api for the Mongodb
*
*/
const _ = require('lodash');
const bodyParser = require('body-parser');

// Require User model in dbRoutes
var User = require('./models/user');
class dbRoutes{

	constructor(app){
		this.app = app;
	}

	/* creating app Routes starts */
	appRoutes(){
    if(typeof this.app.app !== "undefined"){
      this.app.app.use(bodyParser.json());
    }
		this.app.post('/users/register',(req,res) =>{
      console.log(req);
      var body = _.pick(req.body, ['name', 'password']);
      console.log(body);
      var user = new User(body);
      console.log(user);
      user.save().then(() => {
        res.status(200).send(user);
      }).catch((e) => {
        console.log(e);
        res.status(400).send("unable to save to database")
      });
    });

    /*
		this.app.get('*',(request,response) =>{
			response.sendFile(path.join(__dirname,'../dist/index.html'));
		});
    */
  }

	routesConfig(){
		this.appRoutes();
	}
}
module.exports = dbRoutes;
