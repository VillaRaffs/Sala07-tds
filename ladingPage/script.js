function enviar (){
    //retornando o estilo original dos inputs
    document.getElementById('nome').style.border = '1px solid black'
    document.getElementById('assunto').style.border = '1px solid black'
    //atribuito para variaveis constantes os valores digitados
    const nome = document.getElementById ('nome').value
    const assunto = document.getElementById('assunto').value
    //validar se os campos foram preenchidos
    if (nome || assunto){
    document.getElementById('nome').style.border = '2px solid red'
    document.getElementById('assunto').style.border = '2px solid red'
}
const mensagem = `Gostaria de entrar em contato \n\nNome: ${nome} \nAssunto: ${assunto}`
const msg = encodeURIComponent(mensagem)
window.location.href = `https://wa.me/5541997452132=${msg}`
}
