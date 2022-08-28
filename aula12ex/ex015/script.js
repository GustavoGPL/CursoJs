function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById("txtano");
    var res = window.document.getElementById("res");
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("Verifique os dados e tente novamente");
    } else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        var genero = "";
        if (fsex[0].checked) {
            genero = "Homem";
            if (idade >= 0 && idade < 10) {
                //criança
                foto.src = "foto-bebe-h.png";
            } else if (idade < 21) {
                //jovem
                foto.src = "foto-jovem-h.png";
            } else if (idade < 50) {
                //adulto
                foto.src = "foto-adulto-h.png";
            } else {
                //idoso
                foto.src = "foto-idoso-h.png";
            }
        } else if (fsex[1].checked) {
            genero = "Mulher";
            if (idade >= 0 && idade < 10) {
                //criança
                foto.src = "foto-bebe-m.png";
            } else if (idade < 21) {
                //jovem
                foto.src = "foto-jovem-m.png";
            } else if (idade < 50) {
                //adulto
                foto.src = "foto-adulto-m.png";
            } else {
                //idoso
                foto.src = "foto-idoso-m.png";
            }
        }
        res.innerHTML = `Detectamos uma ${genero} com ${idade} anos`;
    }
}