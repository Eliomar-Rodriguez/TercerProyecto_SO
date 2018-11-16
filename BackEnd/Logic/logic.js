var consultsPreparer = require('../consultPreparer/consultPreparer')

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

exports.newMessage = function(datos, callback) {
    consultsPreparer.newMessage(datos, function(response) {
        var msg = (response.error == 1) ? "Error de conexión" : "Error al insertar el mensaje.";
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
                message: msg,
                title: "Error",
                error: response.error,
                type: "error"
            })
        }
    });
};