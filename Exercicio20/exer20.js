function ativarContagem(){
    document.getElementById("tempo").innerHTML = "Começou a contar"
    //ativa a função apenas uma vez apos  tempo determinado 
    tempo = setTimeout(function(){document.getElementById("tempo").innerHTML = "Executou o setTimeOut"
},5000)
}

function pararContagem(){
    clearTimeout(tempo)
    document.getElementById("tempo").innerHTML="parou"
}