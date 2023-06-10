var database = require("../database/config")

function listar(){
    var instrucao = `
    SELECT * FROM ides;
    `;

    console.log("executando a instrucao SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarIde(nomeIde){
    var instrucao = `
    INSERT INTO ides (nome) VALUES ('${nomeIde}');
    `;

    console.log("executando a instrucao SQL: \n " + instrucao)
    return database.executar(instrucao);
}

module.exports = {
    cadastrarIde,
    listar
};