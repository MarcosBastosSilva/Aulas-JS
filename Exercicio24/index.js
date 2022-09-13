const carro = {
    marca:"Fiat",
    modelo:"Uno",
    ano:2021
}
let texto = JSON.stringify(carro)
document.getElementById("area").innerHTML = texto
/*stringify serve para converter um objeto em texto.*/ 