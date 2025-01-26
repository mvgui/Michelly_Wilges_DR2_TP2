/*Crie um programa que solicite o valor da conta de restaurante 
e a quantidade de pessoas, calcule a gorjeta de 10% e exiba o resultado total 
e o valor por pessoa.*/
let valorConta = Number(prompt("Digite o valor da conta:"));
if (valorConta > 0) {
  let gorjeta = Number(valorConta * 0.1);
  let valorTotal = valorConta + gorjeta;
  let qtdPessoas = Number(prompt("Digite a quantidade de pessoas:"));
  if (qtdPessoas > 1) {
    let valorRateio = valorTotal / qtdPessoas;
    alert(`Valor da conta: ${valorConta}
  Gorjeta: ${gorjeta}
  Valor total: ${valorTotal}
  Valor por pessoa: ${valorRateio.toFixed(2)}`);
  } else if (qtdPessoas === 1) {
    valorRateio = valorTotal;
  } else if (qtdPessoas <= 0) {
    alert("Digite um valor maior do que 0.");
  }
} else {
  alert("Digite um valor maior do que 0.");
}
