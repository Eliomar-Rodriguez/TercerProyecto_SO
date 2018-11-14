var logica = require('../Logic/logicExample')
exports.post = function(request, response){
    logica.insertSomething(request.body, (data) => {
        response.send(data);
    })
}

exports.put = function(request, response){
    logica.putSomething(request.body, (data) => {
        response.send(data);
    })
}

exports.select = function(request, response){
    logica.selectSomething((data) => {
        response.send(data);
    })
}

exports.delete = function(request, response){
    logica.deleteSomething(request.query, (data) => {
        response.send(data);
    })
}