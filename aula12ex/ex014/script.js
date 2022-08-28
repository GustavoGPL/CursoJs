function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var horaatual = data.getHours();
    msg.innerHTML = `Agora são ${horaatual} horas`;
    if (horaatual >= 0 && horaatual < 12) {
        //Bom dia
        img.src = "fotomanha.jpg";

        document.body.style.background = "#F0E68C";
    } else if (horaatual <= 18) {
        //Boa tarde
        img.src = "fototarde.jpg";
        document.body.style.background = "#FF7F50";
    } else {
        //Boa noite
        img.src = "fotonoite.jpg";
        document.body.style.background = "#4F4F4F";
    }
}