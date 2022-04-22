function carregar(){
    var agr = new Date()
    var hora = agr.getHours()
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
   

    msg.innerHTML = `Agora são ${hora}h.`

    if (hora >= 0  && hora < 12){
        img.src = 'imagens/manha.png'
        document.body.style.backgroundColor = '#B9B9AD';
    } else if (hora > 12 && hora <= 18){
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundColor = '#C98970';
    } else{
        img.src = 'imagens/noite.png'
        document.body.style.backgroundColor = '#241c11';

    }
}
