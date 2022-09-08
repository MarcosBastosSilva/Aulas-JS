function verificar(){
    let nome =document.getElementById("nome").value;
      
    if (nome == "" || nome == null){
        let p = document.getElementById("teste");
        p.innerHTML = "O campo não pode estar vazio";
        p.style.color = "red";
    } else {
        let p = document.getElementById("teste");
        p.innerHTML = "O campo está preechido corretamente";
        p.style.color = "green";
    }
}