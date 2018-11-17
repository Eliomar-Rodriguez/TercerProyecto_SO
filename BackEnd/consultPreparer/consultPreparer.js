const sqlServerConnection = require('../connectionDB/SQL_Server_Connection')
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

exports.newMessage = function(datos, callback){
    var algo = null;
    try {
        console.log('=-=-=-=-=-=-=--')
        console.log(datos)
        var request = new Request('newMessage', function(err) {
            console.log(err)
            if (err) {
                var msg = (request.error == 1) ? "Error de conexión" : "No se puede insertar el registro";
                callback({
                    success: false,
                    error: 'GG',
                    title: "Error",
                    message: msg,
                    type: "error"
                })
            }
        });
        request.addParameter('textMessage', TYPES.VarChar, datos.textMessage);
        request.addParameter('ID_Emiter', TYPES.Int, datos.ID_Emiter);
        request.addParameter('ID_Receiver', TYPES.Int, datos.ID_Receiver);
        
        request.addOutputParameter('success', TYPES.Bit);
    
        sqlServerConnection.callProcedure(request, function(res) {
            console.log('ioe')
            console.log(res.data)
            algo = callback(res);
        });        
    } catch (error) {
        return callback({
            success: false,
            error: error,
            title: "Error",
            message: 'Error en la operacion',
            type: "error"
        })
    }
    return algo;
};

exports.selectAllUsers = function(callback){
    try {
        var query = 'SELECT ID, username FROM Users';
        var request = new Request(query, function(err) {
            if (err) {
                var msg = (request.error == 1) ? "Error de conexión" : "No se encontraron registros";
                callback({
                    success: false,
                    error: request.error,
                    title: "Error",
                    message: msg,
                    type: "error"
                })
            }
        });
    
        sqlServerConnection.executeRequest(request, callback);

    } catch (error) {
        console.log(error);
    }
};

exports.login = function(datos, callback){
    try {
        var request = new Request('loginUsers', function(err) {
            console.log(err)
            if (err) {
                var msg = (request.error == 1) ? "Error de conexión" : "No se puede comprobar el usuario";
                callback({
                    success: false,
                    error: 'Ocurrio un error en la base de datos',
                    title: "Error",
                    message: msg,
                    type: "error"
                })
            }
        });
        request.addParameter('userName', TYPES.VarChar, datos.textMessage);
        request.addParameter('contrasenia', TYPES.VarChar, datos.contrasenia);
        
        request.addOutputParameter('success', TYPES.Bit);
    
        sqlServerConnection.executeRequest(request, callback);

    } catch (error) {
        console.log(error);
    }
};