var num = [5, 2, 7, 1, 4];
num.push(1);
num.sort();
console.log(num);
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`);

var pos = num.indexOf(7);
if (pos == -1) {
    console.log("Número não encontrado");
} else {
    console.log(`O valor está na posição ${pos}`);
}  


