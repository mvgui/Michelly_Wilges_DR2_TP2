/*Crie um programa que receba o valor da altura e do peso de uma pessoa 
e retorne o seu IMC - Índice de Massa Corporal. */
let altura = prompt("Digite sua altura em metros:");
let peso = prompt("Digite seu peso em Kg:");
let alt = Number(altura.replace(",", "."));
let pes = Number(peso.replace(",", "."));

if (!Number.isNaN(alt) && !Number.isNaN(pes)) {
  if (alt > 0 && pes > 0) {
    let imc = pes / Math.pow(alt, 2);
    alert(`Seu IMC é ${imc.toFixed(2)}`);
  } else {
    alert("Este programa espera um número maior que 0 como entrada.");
  }
} else alert("Este programa espera um número como entrada.");
