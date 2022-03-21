const ewelink = require('ewelink-api');
var express = require('express');
var router = express.Router();
//const sql = require("../models/db.js");
var bodyParser = require("body-parser");
var twig = require('twig');
var resultUpdate="";
var path = require('path');

var server = express();
server.use(bodyParser.urlencoded({ extended: true }));
var app=express();




/* instantiate class */

console.log("Instanciation de Ewelink pour DomoPter");

const connection = new ewelink({
  email: 'philippe.terraillon@gmail.com',
  password: 'U4i6yci8',
  region: 'us',
});
console.log (connection);

router.get("/",function (req,res,next){
    console.log("Home");
    res.send("Home");
})

router.get('/devices', function (req,res,next) {
    //res.send("Liste des devices");
    console.log("getDevices");
    
    (async () => {
        
        const devices = await connection.getDevices();
        res.json(devices);
        console.log(devices);
    })();
    
})

//router.get('/devices/:id', function (req,res,next) {
    /*
  const id = req.params.id;
  //res.send(id);
  
  (async () => {
    //res.status(200).send("Resultat");
    const device = await connection.getDevice(id);
      
    res.json(device);
    res.status(200).end();
    //  const id = parseInt(req.params.id)
    //  const parking = parkings.find(parking => parking.id === id)
    //res.status(200).json(device)
  })();*/
  
//})


module.exports = router;







