const sqlServerConnection = require('../connectionDB/SQL_Server_Connection')
const azure = require('../Controller/AzureBusService')
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

exports.newMessage = function(datos, callback){
    try {
        var request = new Request('newMessage', function(err) {
            if (err) {
                var msg = (request.error == 1) ? "Error de conexión" : "No se puede insertar el registro";
                callback({
                    success: false,
                    error: request.error,
                    title: "Error",
                    message: msg,
                    type: "error"
                })
            }
        });
        request.addParameter('queueName', TYPES.VarChar, datos.queueName);
        request.addParameter('textMessage', TYPES.VarChar, datos.textMessage);
        request.addParameter('ID_Emiter', TYPES.Int, datos.ID_Emiter);
        request.addParameter('ID_Receiver', TYPES.Int, datos.ID_Receiver);
        
        request.addOutputParameter('success', TYPES.Bit);
    
        sqlServerConnection.callProcedure(request, callback);

    } catch (error) {
        console.log(error);
    }
};

exports.selectAllUsers = function(callback){
    try {
        var query = 'SELECT username FROM Users';
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