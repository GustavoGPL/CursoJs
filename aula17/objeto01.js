let amigo = {
    nome: "João",
    sexo: "Masculino",
    idade: 20,
    peso: 90,
    engordar (p=0){
        this.peso += p;
        console.log(amigo.peso);
    }
}
amigo.engordar(6);
console.log(`O peso de ${amigo.nome} é ${amigo.peso}Kg`);
