let data = new Date()

let ano = data.getFullYear()
console.log(ano)

let mes = data.getMonth()
console.log(mes)

//Mostrar o mes no formato escrito
const mesesDoAno =["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
let mesEscrito = mesesDoAno[data.getMonth()]
console.log(mesEscrito)

//pegar o dia do mes 
let diaMes = data.getDate()
console.log(diaMes)

//pegar o dia da semana de seg a dom
let diaSemana = data.getDay()

const diasDaSemana = ["Segunda","Terça","Quarta","Quinta","Sexta","Sábado","Domingo"]
let diasEscrito = diasDaSemana[data.getDay()]
console.log(diasEscrito)

//pegar a hora 0 até 23

let hora = data.getHours()
console.log(hora)

//pegar a minutos

let minutos = data.getMinutes()
console.log(minutos)


//pegar a segundos

let segundos = data.getSeconds()
console.log(segundos)

//pegar a milisegundos

let milisegundos = data.getMilliseconds()
console.log(milisegundos)

//pegar a data do padrão brasileiro
let dataBR = data.toLocaleDateString('pt-BR',{ dateStyle:'short'})
console.log(dataBR)

//pegar os valores separados
d = new Date()
diaMes = d.getDate()
mes = d.getMonth() + 1
ano = d.getFullYear()

function addZero(x){
    return x < 10 ? '0' + x : '' + x
}


let dataPadraoBr = addZero(diaMes) + "/" + addZero(mes) + "/" + ano
console.log(dataPadraoBr)


//comparar datas 

let hoje = new Date()
let vencimento = new Date(2022,0,15)

if (hoje > vencimento){
    console.log('sua conta está vencida')
} else {
    console.log('Ainda não venceu' )
}

//Diferença entre duas datas

let dataInicial = new Date()
let dataFinal = new Date(2022,11,31)

let diferencaDeTempo = dataFinal.getTime() - dataInicial.getTime()

let diferencaEmDias = Math.ceil(diferencaDeTempo / (24 * 60 * 60 * 1000))

console.log(diferencaEmDias + " dias")