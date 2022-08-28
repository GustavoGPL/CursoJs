var valores = [6, 3, 5, 9, 8, 1];
/*
for (var pos = 0; pos < valores.length; pos++) {
    console.log(`Na posição ${pos} tem o valor ${valores[pos]}`)
}
*/ 
for (var pos in valores) {
    console.log(`Na posição ${pos} tem o valor ${valores[pos]}`)
}