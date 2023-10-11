function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora == 0 && hora < 1) {
        msg.innerHTML = `Agora é meia noite !`
    }
    if (hora >= 1 && hora < 2) {
        msg.innerHTML = `Agora são ${hora} hora.`
    }
    if (hora >= 0 && hora < 6) {
        //BOA MADRUGADA!!
        img.src = 'midia/madrugada.jpg'
        document.body.style.background = '#b9846f'
    } else if (hora >= 6 && hora < 12) {
        //BOM DIA!
        img.src = 'midia/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'midia/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else  {
        //BOA NOITE!
        img.src = 'midia/noite.jpg'
        document.body.style.background = '#515154'
    }

}
