/*
*  The Server Class
*/

const express = require("express");
const http = require('http');
const cors = require('cors');
const routes = require('./utils/dbRoutes');
const {mongoose} = require('./utils/mongoose');

class Server{

    constructor(){
        this.port =  process.env.PORT || 4000;
        this.host = `localhost`;

        this.app = express();
        this.http = http.Server(this.app);
    }

    /* Including app Routes starts*/
    includeRoutes(){
        new routes(this.app).routesConfig();
    }

    appExecute(){

        this.includeRoutes();

        this.http.listen(this.port, this.host, () => {
            console.log(`Listening on http://${this.host}:${this.port}`);
        });
    }
}

const app = new Server();
app.appExecute();
