/*Crie um programa que calcule a área, perímetro e o diâmetro de um círculo, 
tendo o comprimento do raio informado pelo usuário. Use Math.PI.*/
let raio = Number(prompt("Digite o comprimento do raio em cm:"));
//Verificação
if (!Number.isNaN(raio) && raio > 0) {
  let diam = raio * 2;
  let perim = 2 * Math.PI * raio;
  let area = Math.PI * Math.pow(raio, 2);

  alert(`O círculo de raio ${raio}cm possui:
  ${diam}cm de diâmetro
  ${perim.toFixed(2)}cm de perímetro
  ${area.toFixed(2)}cm2 de área`);
} else
  alert("Este programa espera receber um número maior que 0 como entrada.");