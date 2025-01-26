/*Um motorista deseja abastecer seu carro com um valor em reais e
quer saber se é melhor usar álcool ou gasolina. Escreva um programa para 
ler o preço do litro de cada combustível e informe qual é o mais vantajoso. 
O cálculo básico para se descobrir se o álcool é vantajoso ou não em relação à 
gasolina é simples: basta dividir o preço do litro do álcool pelo da gasolina. 
Se o resultado for inferior a 0,7 - use álcool, caso contrário abasteça com gasolina.*/
let valorAlcool = prompt("Digite o valor do litro do álcool:");
let valorGasolina = prompt("Digite o valor do litro da gasolina:");
//Substituição
let valorAlc = Number(valorAlcool.replace(",", "."));
let valorGas = Number(valorGasolina.replace(",", "."));
//Verificação
if (!Number.isNaN(valorAlc) && !Number.isNaN(valorGas)) {
  if (valorAlc > 0 && valorGas > 0) {
    let relacao = valorAlc / valorGas;
    if (valorAlc < 0.7) {
      alert("Use GASOLINA!");
    } else alert("Use ÁLCOOL!");
  } else alert("Digite um valor maior que 0.");
} else alert("Este programa espera um número como entrada.");
