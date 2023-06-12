var ideModel = require("../models/ideModel");



function votarIde( req, res){
    var idIde = req.params.idIde

    ideModel.votarIde(idIde).then(function(resposta){
        if(resposta.length > 0){
            res.status(200).send("Ide votada com sucesso");
        }else{
            res.status(204).send('Sem resposta')
        }
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    votarIde
}