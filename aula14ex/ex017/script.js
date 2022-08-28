function calctabu() {
    var formnum = window.document.getElementById("num");
    var res = window.document.getElementById("tabuada");
    
    if (formnum.value.length == 0) {
        alert("Por favor, digite um número");
    } else if (formnum.value < 0) {
        alert("digite um número positivo");
    } else {
        var n = Number(formnum.value);
        var c = 1;
        res.innerHTML = "";
        while (c <= 10) {
            var item = document.createElement("option");
            item.text = `${n} x ${c} = ${n * c}`;
            res.appendChild(item);
            c++;
        }
    }

}
