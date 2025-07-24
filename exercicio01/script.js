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
  if(numero8 !== 0){
    resp.textContent= numero7 / numero8
  }else{
    resp.textContent = numero7 / numero8
}
}

//function media(){
  //var numero9 = parseFloat(document.getElementById("n9").value)
    //var numero10 = parseFloat(document.getElementById("n10").value)
    //var numero11 = parseFloat(document.getElementById("n11").value)
    //var numero12 = parseFloat(document.getElementById("n12").value)
    //var numero13 = parseFloat(document.getElementById("n13").value)
    //console.log(numero9, numero10, numero11, numero12, numero13)
    //var resp = document.getElementById("respostamedia")
   // resp.textContent = (numero9 + numero10 + numero11 + numero12 + numero13) / 5
//}
//outra maneira de calcular a media
//arrow function
const media= () =>{
var nota1 = parseFloat(document.getElementById('n9').value) 
var nota2 = parseFloat(document.getElementById('n10').value)
var nota3 = parseFloat(document.getElementById('n11').value) 
var nota4 = parseFloat(document.getElementById('n12').value) 
var nota5 = parseFloat(document.getElementById('n13').value) 
var media = document.getElementById('media') 
media.innerHTML = (nota1 + nota2 + nota3 + nota4 + nota5)/5
var resposta  = (nota1 + nota2 + nota3 + nota4 + nota5)/5
if(resposta >= 7){
media.style.color= 'green'
}else{
media.style.color ='red'
}
}