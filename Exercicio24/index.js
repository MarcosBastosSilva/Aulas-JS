const carro = {
    marca:"Fiat",
    modelo:"Uno",
    ano:2021,
    motor:["1.6","1.4","1.0"]
}
let texto = JSON.stringify(carro)
document.getElementById("area").innerHTML = texto

let obj = JSON.parse(texto)
console.log(obj.motor[2])
/*stringify serve para converter um objeto em texto.
parse transforma texto em objeto.*/ 


function buscarCEP(){
    let input = document.getElementById("cep").value
    const ajax = new XMLHttpRequest()
    ajax.open('GET', 'https://viacep.com.br/ws/'+ input + '/json/')
    ajax.send()

    ajax.onload = function () {
        //document.getElementById("texto").innerHTML = this.responseText
        let obj = JSON.parse(this.responseText)
        let logradouro = obj.logradouro
        let cidade = obj.localidade
        let estado = obj.uf
        document.getElementById("texto").innerHTML = "Cidade:" + cidade + " <br> Logradouro:" + logradouro + " <br> Estado:" + estado 
    }   
}  



