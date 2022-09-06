document.getElementById("texto").innerHTML = "Meu primeiro texto JS"
console.log('Isso é um console.log')
/*
// let nao permite a declaração de outra variavel. LET É UM SÓ dentro de um escopo
//funcao de soma
function soma(valor1,valor2){
    return valor1 + valor2
}
// funcao de cotação do dolar
function RealParaDolar(real, cotacaoDoDolar){
    return real * cotacaoDoDolar;
}

var valorEmReal = 50.07
var conversaoDolar = 5.15


let total = RealParaDolar(valorEmReal,conversaoDolar);
alert("O valor em real é R$:"+valorEmReal+" o valor em dolar é  U$ é: "+total)


function HelloPessoal(){
    alert("Olá Pessoal!")
}

function paraCelsius(valorFahrenheit){
    return (5/9) * (valorFahrenheit - 32);
}

var celsius = paraCelsius(80);

alert("A temperatura é de  " + celsius +"graus cesius")
*/

//metodo é uma propriedade quando tem uma função.   Objeto,propriedade função.
const carro = {
    marca:"ford",
    modelo:"ka",
    ano:"2015",
    placa:"ABC1234",
    buzina: function() {alert('BIIIIIIIIIIIIIIIIIII')},
    completo: function(){
        return "A marca é " +this.marca + "e o modelo é" +this.modelo
    }
};

console.log(carro.completo())

function eventoClick(){
    //alert("Acionou um evento de click")
    document.body.style.background = "yellow"
}

function viraVermelho(){
    let div = document.getElementById("teste")
    div.style.background = "red"
}

function viraAzul(){
    let div = document.getElementById("teste")
    div.style.background = "blue"
}

function mudou(){
    console.log("mudou")
}

function teclaPressionada(){
    let input = document.getElementById("campoTexto").value
    console.log(input)
    
}

