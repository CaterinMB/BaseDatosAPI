//Funcion de Exito
exports.success = function (req, res, message, status){
    res.status(status || 200).send({
        error:'',
        body:message
    })
}

//Funcion de Fracaso
exports.error = function (req, res, message, status){
    res.status(status || 404).send({
        error:message,
        body:''
    })
}