/*[Faça esse em grupo] - Crie um programa que solicite ao usuário os três lados 
de um triângulo e informe se o triângulo é Equilátero, Isósceles ou Escaleno 
(obs: Equilátero possui todos os lados iguais, Isósceles possui dois lados iguais e 
  um diferente e Escaleno possui todos os lados diferentes).*/
let lado1 = Number(prompt("Digite o comprimento do primeiro lado  em cm:"));
let lado2 = Number(prompt("Digite o comprimento do segundo lado em cm:"));
let lado3 = Number(prompt("Digite o comprimento do terceiro lado em cm:"));
//Verificação
if (!Number.isNaN(lado1) && !Number.isNaN(lado2) && !Number.isNaN(lado3)) {
  if (lado1 > 0 && lado2 > 0 && lado3 > 0) {
    if (lado1 === lado2 && lado2 === lado3) {
      alert("Este triângulo é Equilátero.");
    } else if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
      alert("Este triângulo é Escaleno.");
    } else alert("Este triângulo é Isósceles.");
  } else alert("Digite um número maior que 0.");
} else alert("Este programa espera receber números como entrada.");
