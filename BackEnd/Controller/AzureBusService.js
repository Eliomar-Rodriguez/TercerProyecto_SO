const azure = require('azure-sb');

const sbService = azure.createServiceBusService('Endpoint=sb://tercerproyecto.servicebus.windows.net/;SharedAccessKeyName=mensajes;SharedAccessKey=+cT2kgf9U+IPpwqoIHc5rlnYV1fT7XCIiZicQfBDxSY=');

const DB_Funtions = require('../consultPreparer/consultPreparer')

exports.checkForMessages = function(callback) {
    //isPeekLock=true permite leer los mensajes sin que se eliminen ya que por default apenas se leen de la pila se eliminan
    sbService.receiveQueueMessage('mensajes', { isPeekLock: true }, function (err, lockedMessage) {
        console.log('=====Mensajes=====')
        console.log(lockedMessage)
        if (err) {
            if (err == 'No messages to receive') {
                console.log('No messages');
            } else {
                callback({
                    error: true,
                    data: null
                });
            }
        } else {
            callback({
                error: false,
                data: lockedMessage
            });
        }
    });
}

/**
 * Funcion encargada de enviar mensajes a traves de un canal comunicacion
 * @param {*} sbService 
 * @param {*} queueName 
 * @param {*} msg 
 */
exports.sendMessages = function(queueName, datos, callback) {
    
    var message = {
        ID_Emiter : datos.ID_Emiter,
        ID_Receiver : datos.ID_Receiver,
        textMessage : datos.textMessage
    }

    var message1 = { // este es el mensaje a insertar en la pila CON ESTE FORMATO
        body: JSON.stringify(message),
        customProperties: {
            testproperty: JSON.stringify(message)
        }
    };

    sbService.sendQueueMessage(queueName, message1, function (err) {
        if (err) {
            console.log('Sent message failed Tx: ', err);
            callback({success: false});
        } else {// exito con i=la insercion del mensaje en la cola de azure 'mensajes'
            console.log('The message was sent properly.');
            callback({success: true});
        }
    });
}