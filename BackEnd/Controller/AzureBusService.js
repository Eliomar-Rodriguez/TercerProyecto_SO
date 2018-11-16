const azure = require('azure-sb');

const sbService = azure.createServiceBusService('Endpoint=sb://tercerproyecto.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=BQHtbCtGbBD+ybakAqFkKjyxjOfcza1Yp5xdoAY7apM=');

exports.createConversation = function(queueName){
    sbService.createQueueIfNotExists(queueName, function (err) {
        if (err) {
            console.log('Failed to create queue: ', err);
        } else {
            setInterval(checkForMessages.bind(null, sbService, queueName, processMessage.bind(null, sbService)), 5000);
            setInterval(sendMessages.bind(null, sbService, queueName), 15000);
        }
    });
}
/**
 * Funcion encargada de checkear la existencia de nuevos mensajes
 * @param {*BusService Bus services a utilizar } sbService 
 * @param {*ColaDeTransmision Canal de comunicacion especifico } queueName 
 * @param {*Respuesta} callback 
 */

exports.checkForMessages = function(queueName, callback) {
    //isPeekLock=true permite leer los mensajes sin que se eliminen ya que por default apenas se leen se eliminan
    sbService.receiveQueueMessage(queueName, { isPeekLock: true }, function (err, lockedMessage) {
        if (err) {
            if (err == 'No messages to receive') {
                console.log('No messages');
            } else {
                callback(err);
            }
        } else {
            callback(null, lockedMessage);
        }
    });
}

/**
 * Funcion encargada de enviar mensajes a traves de un canal comunicacion
 * @param {*} sbService 
 * @param {*} queueName 
 * @param {*} msg 
 */
exports.sendMessages = function(queueName,msg, callback) {
    sbService.sendQueueMessage(queueName, msg, function (err) {
        if (err) {
            console.log('Sent message failed Tx: ', err);
        } else {
            console.log('The message was sent properly.');
        }
    });
}