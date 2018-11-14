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
var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    port = 8080;

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + './Public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

var html = '<center>'+
    '<p style="padding-top:10%">'+
        '<h2>'+
            'TEC Sede San Carlos<br>'+
            'Back-End de tercer proyecto de SO'+
        '</h2>'+
        '<b>Desarrolladores:</b> <br>- Kembly Quiros Araya <br>'+
        '- Eliomar Antonio Rodriguez Arguedas <br>'+
        '- Alberth Salas Calero <br>'
        ' <br><br>'+
        '<h3><b style="color: red"> Atención: </b>Ruta vacía.</h3>'+
    '</p>'+
    '</center>';

app.post('/', (req, res) => {    
    res.send(html);
})
app.put('/', (req, res) => {    
    res.send(html);
})
app.get('/', (req, res) => {    
    res.send(html);
})
app.delete('/', (req, res) => {    
    res.send(html);
})

app.post('/', controller.post);
app.get('/', controller.select);
app.put('/', controller.put);
app.delete('/', controller.delete);


/*
======================================================================================
>  Pone el servidor en escucha de peticiones, lo levanta en el puerto especificado.  <
======================================================================================
*/
server.listen(port, function() {
    console.log('Servidor escuchando en el puerto: ' + port);
});