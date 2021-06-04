function moura() {
    var qual = prompt("Qual seu Nome?")
    const data = new Date()
    const hora = data.getHours();
    var img = document.getElementById("foto")
    const res = document.getElementById("mostra")
    if (qual == null) {
        qual = 'Visitante'
    }
    if (hora >= 7 && hora < 12) {
        res.innerHTML = `Bom dia, ${qual}`
        img.src = './img/manha.png'
    } else if (hora < 18) {
        img.src = '../img/tarde.gif';
        res.innerHTML = `Boa Tarde, ${qual}`
    } else if (hora < 23) {
        img.src = './img/triste.gif'
        res.innerHTML = `Boa Noite, ${qual}`
    }
}
