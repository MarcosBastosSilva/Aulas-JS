class Carro {
    constructor(valor1,valor2,valor3){
        this.marca = valor1
        this.modelo = valor2
        this.ano = valor3
    }
    buzina(){
        return  this.modelo +"buzinou : biiiiiiiiiii"
    }
}

const uno = new Carro("fiat", "uno", 2001)
const gol = new Carro("Volkswagem", "gol",2007)
console.log(uno)




