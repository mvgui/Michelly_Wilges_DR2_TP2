/*Crie um programa que calcule o novo valor de um salário a partir de um valor 
percentual de reajuste. O valor atual do salário e o valor percentual do reajuste 
devem ser informados pelo usuário.
Ex: salário = 5432.10 (R$5.432,10) e o percentual = 7.3 (7,3%).*/
let salarioAtual = prompt("Digite o valor do atual salário:");
let percentualReajuste = prompt("Digite o percentual de reajuste:");
//Substituição
let salAtual = Number(salarioAtual.replace(",", "."));
let reajuste = Number(percentualReajuste.replace(",", "."));
//Validação
if (!Number.isNaN(salAtual) && !Number.isNaN(reajuste)) {
  if (salAtual > 0 && reajuste > 0) {
    let salReajustado = salAtual * (reajuste / 100) + salAtual;
    alert(
      `O valor do salário passa a ser de R$ ${salReajustado} após o reajuste de ${reajuste}%.`
    );
  } else alert("Digite um número maior que 0.");
} else alert("Este programa espera receber números como entrada.");
