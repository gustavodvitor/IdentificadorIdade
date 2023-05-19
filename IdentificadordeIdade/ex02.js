function carregar(){
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date()
    //var hora = data.getHours()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = "img/Manhã.png";
        document.body.style.background = "#FDE29C";
    } else if (hora >= 12 && hora <=18){
        //Boa tarde
        img.src = 'img/Tarde.png'
        document.body.style.background = "#FEC586";
    }else {
        //Boa noite
        img.src = 'img/Noite.png'
        document.body.style.background = "#1D0F05";
    }
}
