
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()  
var segundos = data.getSeconds()
msg.innerHTML = `Agora são${hora} horas e ${minuto} minutos e ${segundos} segundos.`
function carregar () {
    if (hora >= 0 && hora < 12) {
    img.src = "imagens/dia.png"
    document.body.style.background = '#cc857a'
    }
    else if (hora >= 12 && hora <= 18) {
    img.src = "imagens/tarde.png"
    document.body.style.background = '#fbb692'
    }
    else {
    img.src = "imagens/noite.png"
    document.body.style.background = '#9a79b0'
    }
}