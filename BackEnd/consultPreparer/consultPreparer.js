const sqlServerConnection = require('../connectionDB/SQL_Server_Connection')
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

exports.newMessage = function(datos, callback){
    var algo = null;
    try {
        var request = new Request('newMessage', function(err) {
            //console.log(err)
            if (err) {
                
                callback({
                    success: false,
                    error: request.error,
                    title: "Error",
                    message: 'No se puede insertar el registro',
                    type: "error"
                })
            }
        });
        request.addParameter('textMessage', TYPES.VarChar, datos.textMessage);
        request.addParameter('ID_Emiter', TYPES.Int, datos.ID_Emiter);
        request.addParameter('ID_Receiver', TYPES.Int, datos.ID_Receiver);
        
        request.addOutputParameter('success', TYPES.Bit);
    
        sqlServerConnection.callProcedure(request, function(res) {
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
                callback({
                    success: false,
                    error: request.error,
                    title: "Error",
                    message: "No se encontraron registros",
                    type: "error"
                })
            }
        });
    
        sqlServerConnection.executeRequest(request, callback);

    } catch (error) {
        console.log(error);
    }
};

exports.getAllMessages = function(datos ,callback){
    var query = 'SELECT TextMessage, ID_Emiter, ID_Receiver FROM ChatMessages WHERE (ID_Emiter = '+datos.ID_Receiver+' AND ID_Receiver = '+datos.ID_Emiter+' ) OR (ID_Emiter = '+datos.ID_Emiter+' AND ID_Receiver = '+datos.ID_Receiver+' );'
    var request = new Request(query, function(err) {
        if (err) {
            callback({
                success: false,
                error: request.error,
                title: "Error",
                message: "No se encontraron registros",
                type: "error"
            })
        }
    });

    sqlServerConnection.executeRequest(request, function(res) {
        callback(res);
    });
};

exports.login = function(datos, callback){    
    var request = new Request('loginUsers', function(err) {
        console.log(err)
        if (err) {
            callback({
                success: false,
                error: request.error,
                title: "Error",
                message: "No se encontraron registros",
                type: "error"
            })
        }
    });
    request.addParameter('userName', TYPES.VarChar, datos.userName);
    request.addParameter('contrasenia', TYPES.VarChar, datos.contrasenia);

    request.addOutputParameter('success', TYPES.Bit);
    request.addOutputParameter('ID', TYPES.Int);

    sqlServerConnection.callProcedure(request, function(res) {
        callback(res);
    });
};