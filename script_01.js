/*
Crie um programa que solicite dois números maiores que zero e 
exiba a divisão de um pelo outro e o resto da divisão de um pelo outro 
em uma única mensagem. 
*/
let numero1 = Number(prompt("Digite o primeiro número maior que 0:"));
let numero2 = Number(prompt("Digite o segundo número maior que 0:"));

if (!Number.isInteger(numero1) && !Number.isInteger(numero2)) {
  alert("Esse programa espera números como entrada.");
} else if (numero1 > 0 && numero2 > 0) {
  let resultado = Number(Math.floor(numero1 / numero2));
  let resto = Number(numero1 % numero2);
  alert(
    `O resultado da divisão é ${resultado} e o resto da divisão é ${resto}.`
  );
} else {
  alert("Esse programa espera números maiores que 0.");
}
