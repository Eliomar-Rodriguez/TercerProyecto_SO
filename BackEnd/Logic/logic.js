var consultsPreparer = require('../consultPreparer/consultPreparer')
var azure = require('../Controller/AzureBusService')

/**
 * 
 * @param {*} callback Funcion a donde retorna luego de seleccionar todo los usuarios
 */
exports.selectAllUsers = function(callback) {
    consultsPreparer.selectAllUsers(function(response) {
        if (response.success) {
            callback({
                success: true,
                error: response.error,
                title: "Selección exitosa",
                message: "Usuarios seleccionados con éxito",
                data: response.data,
                type: "success"
            })
        } else {
            callback({
                success: false,
                message: 'Error con la seleccion de los usuarios',
                title: "Error",
                error: response.error,
                type: "error"
            })
        }
    });
};

/**
 * Funcion encargada de enviar mensajes al la cola de azure service bus y luego inserta en la base de datos los mismos mensajes
 * @param {*} datos Datos del mensaje (emisor, receptor, mensaje)
 * @param {*} callback Funcion a donde debe volver
 */
exports.newMessage = function(datos, callback) { 
    azure.sendMessages('mensajes', datos, function(response) {
        if (response.success) {
            callback({
                success: true,
                error: response.error,
                title: "Inserción exitosa",
                message: "Inserción realizada con éxito",
                data: response.data,
                type: "success"
            })
        } else {
            callback({
                success: false,
                message: 'Error con la insercion',
                title: "Error",
                error: response.error,
                type: "error"
            })
        }
    })
};


exports.getAllMessages = function(datos, callback) {
    consultsPreparer.getAllMessages(datos, function(response) {
        if (response.success) {
            callback({
                success: true,
                title: "Selección exitosa",
                message: "Mensajes seleccionados con éxito",
                data: response.data,
                type: "success"
            })
        } else {
            callback({
                success: false,
                message: 'Error al recuperar el mensaje',
                title: "Error",
                error: 'Error al recuperar mensajes',
                type: "error"
            })
        }
    });
};

exports.login = function(datos, callback) {
    consultsPreparer.login(datos, function(response) {
        console.log("response!!!!")
        console.log(response)//|| (response.data && response.data[0].success !== -1)
        
        if (response.data && response.data[0].success !== -1) {
            console.log('TRUE')
            callback({
                success: true,
                error: response.error,
                title: "Verificación exitosa",
                message: "Efectivamente es un usuario, credenciales correctas",
                data: response.data,
                type: "success"
            })
        } else {
            callback({
                success: false,
                message: 'Error, el usuario no existe o las credenciales son erroneas',
                title: "Error",
                type: "error"
            })
        }
    });
};