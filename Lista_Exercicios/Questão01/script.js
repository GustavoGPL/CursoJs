var num = document.querySelector("input#txtnum");
var list = document.querySelector("select#select");
var res = document.querySelector("div#res");
var valores = [];

function adicionar() {
    if (num.value > 0 && num.value != 0) {
        valores.push(Number(num.value));
        var item = document.createElement("option");
        item.text = Number(num.value);
        list.appendChild(item);
    } else {
        alert("digite um valor positivo e diferente de zero");
    }
    num.value = "";
    num.focus();
}
function media() {
    if (valores.value == 0) {
        alert("Não há valores");
    } else {
        var tot = valores.length;
        var media = 0;
        for (var pos = 0; pos < tot; pos++) {
            media += valores[pos] / tot;
            console.log(media);
        }
    }
    res.innerHTML = `a média é ${media.toFixed(1)}`;
    
}