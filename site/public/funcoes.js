// sessão
function validarSessao() {
  

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    

    if (email != null && nome != null) {
        window.alert(`Seja bem-vindo, ${nome}!`);

       
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

