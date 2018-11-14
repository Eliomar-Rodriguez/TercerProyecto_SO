const sqlServerConnection = require('../connectionDB/SQL_Server_Connection')
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

exports.insertSomething = function(datos, callback){
    try {
        var request = new Request('insert_StoreProcedure', function(err) {
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
        request.addParameter('name', TYPES.Int, datos.name);
        
        request.addOutputParameter('success', TYPES.Bit);
    
        sqlServerConnection.callProcedure(request, callback);

    } catch (error) {
        console.log(error);
    }
};

exports.putSomething = function(request, response){
    
};

exports.selectSomething = function(request, response){
    
};

exports.deleteSomething = function(request, response){
    try {
        var query = 'DELETE FROM XTabla WHERE ID = ' + request.ID;
        var request = new Request('insert_StoreProcedure', function(err) {
            if (err) {
                var msg = (request.error == 1) ? "Error de conexión" : "No se puede eliminar el registro";
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
