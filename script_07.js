/*Um motorista deseja abastecer seu carro com um valor em reais. 
Escreva um programa para ler o preço do litro do combustível 
e o valor que o motorista deseja abastecer. Em seguida, informe quantos litros 
foram colocados no tanque.*/
let precoLitro = prompt("Digite o valor do litro do combustível:");
let valorDesejado = prompt("Digite o valor que deseja abastecer:");
//Conversão
let precoL = Number(precoLitro.replace(",", "."));
let valorDesej = Number(valorDesejado.replace(",", "."));
//Verificação
if (!Number.isNaN(precoL) && !Number.isNaN(valorDesej)) {
  if (precoL > 0 && valorDesej > 0) {
    let qtdLitros = valorDesej / precoL;
    alert(
      `Para R$ ${valorDesej}, o abastecimento será de ${qtdLitros.toFixed(3)}L.`
    );
  } else {
    alert("Este programa espera um número maior que 0 como entrada.");
  }
} else alert("Este programa espera um número como entrada.");
