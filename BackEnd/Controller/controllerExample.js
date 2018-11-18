var logica = require('../Logic/logic')
//var azureFunctions = require('../Controller/AzureBusService')

exports.newMessage = function(request, response){
    //console.log('KEMBLY')
    //console.log(request.body)
    logica.newMessage(request.body, function(data) {
        //console.log(data)
        response.send(data);
    })
}

exports.allUsers = function(request, response){
    logica.selectAllUsers(function(data) {
        //console.log(data)
        response.send(data);
    })
}

exports.getAllMessages = function(request, response){
    logica.getAllMessages(request.body, function(data) {
        //console.log(data)
        response.send(data);
    })
}

exports.login = function(request, response){
    logica.login(request.body, function(data) {
        //console.log(data)
        response.send(data);
    })
}
