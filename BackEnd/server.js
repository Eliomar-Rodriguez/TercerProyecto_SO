/*
=================================================
=   Author: Eliomar Antonio Rodríguez Arguedas   =
=                                               =
=   The Back-End implements all HTTP VERBS      =
=   so thats why it works with REST=
=   REST, and is very modularized               =
=================================================

===============================================================
>  Files where are the controllers on the server              <
===============================================================
*/
const controller = require('./Controller/controllerExample')


/*
===============================================================================
>  Configuraciones principales del servidor, con esto escucha las peticiones  <
===============================================================================
*/
var bodyParser = require('body-parser');
const helmet = require('helmet')
var path = require('path');
var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    port = 8080;

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/./Public')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.post('/sendMessage', controller.newMessage); //funciona 100%
app.get('/allUsers', controller.allUsers); // funciona 100%
app.post('/getMessagesChat', controller.getAllMessages);
app.post('/login', controller.login); // funciona 100%
/*app.all('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/./Public/index.html'));
});*/

/*
======================================================================================
>  Pone el servidor en escucha de peticiones, lo levanta en el puerto especificado.  <
======================================================================================
*/
server.listen(port, function() {
    console.log('Servidor escuchando en el puerto: ' + port);
});