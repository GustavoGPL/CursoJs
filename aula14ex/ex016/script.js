function calcular() {
    var forminicial = window.document.getElementById("numinicial");
    var formfinal = window.document.getElementById("numfinal");
    var formpasso = window.document.getElementById("numpasso");
    var res = window.document.getElementById("res");

    if (forminicial.value.length == 0 || formfinal.value.length == 0 || formpasso.value.length == 0) {
        res.innerHTML = "Impossível contar";
    } else {
        res.innerHTML = `Contando:`
        var i = Number(forminicial.value);
        var f = Number(formfinal.value);
        var p = Number(formpasso.value);

        while (p <= 0) {
            p = 1;
            alert("Passo Ivalido, considerando passo 1");
        }

        for (var c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} ➡`;
        } for (var c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c} ➡`;
        }
        res.innerHTML += `🎯`
    }
    
}