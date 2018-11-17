var logica = require('../Logic/logic')
//var azureFunctions = require('../Controller/AzureBusService')

exports.newMessage = function(request, response){
    logica.newMessage(request.body, function(data) {
        response.send(data);
    })
}

exports.allUsers = function(request, response){
    logica.selectAllUsers(function(data) {
        response.send(data);
    })
}

exports.getAllMessages = function(request, response){
    logica.getAllMessages(function(data) {
        response.send(data);
    })
}

exports.login = function(request, response){
    logica.login(request.body, function(data) {
        response.send(data);
    })
}
