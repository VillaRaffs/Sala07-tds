function soma (){
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById("respostasoma")
    //console.log(numero1, numero2)
    resposta.textContent = numero1 + numero2
   // ou resposta.innerHTML= numero1+ numero2
   // ou resposta.innerText = numero1+ numero2
}

function subtracao(){
    var numero3 = parseFloat(document.getElementById("n3").value)
    var numero4 = parseFloat(document.getElementById("n4").value)
    var resp = document.getElementById("respostasubtracao")
    resp.textContent = numero3 - numero4
}

function multiplicacao(){
    var numero5 = parseFloat(document.getElementById("n5").value)
    var numero6 = parseFloat(document.getElementById("n6").value)
    console.log(numero5, numero6)
    var resp = document.getElementById("respostamultiplicacao")
    resp.textContent = numero5 * numero6
}

function divisao(){
    var numero7 = parseFloat(document.getElementById("n7").value)
    var numero8 = parseFloat(document.getElementById("n8").value)
    var resp = document.getElementById("respostadivisao")
  if(numero10!== 0){
    resp.textContent= numero7 / numero8
  }else{
    resp.textContent = numero7 / numero8
}