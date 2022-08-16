agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if(hora < 13) {
    console.log(`Agora é ${hora} horas da manhã.`)
}
else if (hora <= 17.59) {
    console.log(`Agora é ${hora} horas da tarde`)
}
else if(hora >= 18) {
    console.log(`Agora é ${hora} horas da noite`)
}
