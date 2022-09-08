const numeros = [40,100,1,5,25,10]
const maiorQue20 = numeros.filter(filtragem);

function filtragem(value,index,array){
    return value >20;
}


//numeros.sort(function(a,b){return b-a})

function MaiorNumero(array){
    return Math.max.apply(null,array)
}
function MenorNumero(array){
    return Math.min.apply(null,array)
}
document.getElementById("teste").innerHTML =maiorQue20