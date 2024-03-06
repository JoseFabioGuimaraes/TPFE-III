var nome = "José";
const cpf = "123-456-789.00";

function definirSobrenome(){
    let sobreNome = "Silva";
    return sobreNome;
}

let sobrenome = definirSobrenome();

console.log(nome +"\n" +sobrenome+"\n" + cpf)

//primeiro exercicio

function objetivoDaDisciplina (tecnologia){
    return console.log("Meu objetivo é aprender: "+tecnologia);
}

const tecnologia = "React";

objetivoDaDisciplina(tecnologia);

// exercicio 2

const objetivoDaDisciplinaArrow = (tecnologia) => console.log("Meu objetivo é aprender: "+tecnologia);
objetivoDaDisciplinaArrow(tecnologia);

// exercicio 3

const notas= [10, 6.9,9.0];
var media =  (notas[0]+notas[1]+notas[2])/notas.length;


console.log("Nota 1: "+notas[0]);
console.log("Nota 2: "+notas[1]);
console.log("Nota 3: "+notas[2]);
console.log("Média das notas: "+ media)

//Exercicio 4

//aproveitando do array de notas: 

console.log("Exercicio 5")
console.log("Nota 1: "+notas[0]);
console.log("Nota 2: "+notas[1]);
console.log("Nota 3: "+notas[2]);
console.log("Média das notas: "+ media)
if (media > 7.0){
    return console.log("Aluno aprovado")
}
else{
    return console.log("Aluno Reprovado")
}
// exercicio 5
