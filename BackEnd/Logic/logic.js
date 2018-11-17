var consultsPreparer = require('../consultPreparer/consultPreparer')
var azure = require('../Controller/AzureBusService')

/**
 * 
 * @param {*} callback Funcion a donde retorna luego de seleccionar todo los usuarios
 */
exports.selectAllUsers = function(callback) {
    consultsPreparer.selectAllUsers(function(response) {
        var msg = (response.error == 1) ? "Error de conexión" : "Error al seleccionar usuarios.";
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
                message: msg,
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
            console.log("Receive a message")
            callback({
                success: true,
                error: response.error,
                title: "Inserción exitosa",
                message: "Inserción realizada con éxito",
                data: response.data,
                type: "success"
            })
        } else {
            console.log("RIP prro")
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


exports.getAllMessages = function(callback) {
    azure.checkForMessages('mensajes', function(response) {
        console.log(response.data)
        var msg = (response.error) ? "Error de conexión" : "Error al recuperar mensajes.";
        if (!response.error) {
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
                message: msg,
                title: "Error",
                error: 'Error al recuperar mensajes',
                type: "error"
            })
        }
    });
};

exports.login = function(datos, callback) {
    consultsPreparer.login(datos, function(response) {
        console.log(response)
        var msg = (response.error == 1) ? "Error de conexión" : "Error al verificar el usuario.";
        if (response.success) {
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
                message: msg,
                title: "Error",
                error: response.error,
                type: "error"
            })
        }
    });
};