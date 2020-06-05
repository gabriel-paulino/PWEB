function validar(frm) {

    if (frm.nome.value == "" || frm.nome.value == null || frm.nome.value.length < 10) {
        alert("Informe um nome com no mínimo 10 caractéres.");
        frm.nome.focus();
        return false;
    }

    if (frm.comentario.value == "" || frm.comentario.value == null || frm.comentario.value.length < 20) {
        alert("Deixe um comentario com pelo menos 20 caractéres.");
        frm.comentario.focus();
        return false;
    }

    if (frm.elements['sim'].checked) {
        alert("Que bom que você voltou a esta página!");
    } else if (frm.elements['nao'].checked) {
        alert("Volte sempre a esta página!");
    }
}

function Limpar() {

    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const comentario = document.getElementById('comentario');

    nome.value = "";
    email.value = "";
    comentario.value = "";
    nome.focus();
}