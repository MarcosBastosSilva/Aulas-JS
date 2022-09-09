
let ano = new Date().getFullYear()

for(let i= ano; i >= 1900 ; i--){
    document.getElementById("ano").innerHTML += "<option value>"+ i + "</option>"
}

const carros = ["gol", "fusca", "Brasilia", "Del Rey","Chevette"]
let tamanho = carros.length

for( let i = 0; i < tamanho; i++){
    document.getElementById("teste").innerHTML +=carros [i] + " - "
}