/*Crie um programa que calcule a área de um quadrado, sendo que o comprimento 
do lado é informado pelo usuário. A área do quadrado é calculada elevando-se o 
lado ao quadrado. Use Math.pow para aplicar a potenciação.*/
let lado = Number(prompt("Digite o comprimento do lado do quadrado em cm:"));
//Verificação
if (!Number.isNaN(lado) && lado !== 0) {
  let area = Math.pow(lado, 2);
  alert(`A área do quadrado de lado ${lado} é de ${area} cm2.`);
} else {
  alert("Este programa espera um número diferente de 0 como entrada.");
}
