var num = window.document.getElementById("fnum");
var lista = window.document.getElementById("flista");
var res = window.document.getElementById("res");
var valores = [];


function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false; 
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        var item = document.createElement("option");
        item.text = `Valor ${num.value} adicionado`;
        lista.appendChild(item);
        res.innerHTML = "";
    } else {
        alert("Número inválido ou já está na lista");
    }
    num.value = "";
    num.focus();
}

function finalizar() {
    if (valores.length == 0) {
        alert("Não há valores, adicione valores");
    } else {
        var tot = valores.length;
        var reverse = valores.reverse();
        var maior = valores[0];
        var menor = valores[0]
        var soma = 0;
        var media = 0
        for (var pos = 0; pos < tot; pos++) {
            soma += valores[pos]
            media += valores[pos] / tot;
            if (valores[pos] > maior)
                maior = valores[pos];
            if (valores[pos] < menor)
                menor = valores[pos];
        }
        res.innerHTML = "";
        res.innerHTML += `<p>O maior numero nessa lista é ${maior}</p>`;
        res.innerHTML += `<p>O menor numero nessa lista é ${menor}</p>`;
        res.innerHTML += `Ao todo temos ${tot} números cadastrados<br><p>O ultimo numero da lista é ${reverse[0]}</p>`;
        res.innerHTML += `<p>Somando todos os valores é igual a ${soma}</p.`;
        res.innerHTML += `<p>A média de todos os valores é igual a ${media}</p>`;
    }

}