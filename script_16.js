/*[Faça esse em grupo] - Crie uma aplicação que solicite ao usuário um ano com 4 dígitos
 e informe se aquele ano é bissexto ou não.*/
let ano = Number(prompt("Digite o ano com 4 dígitos:"));

if (
  ano != null &&
  !Number.isNaN(ano) &&
  Number.isInteger(ano) &&
  ano > 0 &&
  ano <= 9999
) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    alert(`${ano} é bissexto.`);
  } else {
    alert(`${ano} não é bissexto.`);
  }
} else alert("Este programa espera receber um número inteiro como entrada.");
