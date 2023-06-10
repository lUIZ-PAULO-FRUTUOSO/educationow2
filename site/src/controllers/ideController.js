var ideModel = require("../models/ideModel");

function listar(req, res){
    ideModel.listar().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrarIde( req, res){
    var nomeIde = req.body.nome;

    if(nomeIde == undefined){
        res.status(400).send("seu nome está indefinido");
    }

    ideModel.cadastrarIde(nomeIde).then(function(resposta){
        res.status(200).send("Ide criada com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrarIde
}