var database = require("../database/config")



function votarIde(idIde){
    var instrucao = `
    update ides set votos = votos +1  where id = ${idIde};
    `;

    console.log("executando a instrucao SQL: \n " + instrucao)
    return database.executar(instrucao);
}

module.exports = {
    votarIde
};