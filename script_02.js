/*Crie um programa que receba o valor de um produto, o valor pago e calcule 
(a) o troco, (b) o troco arredondado para cima e (c) o troco arredondado para baixo. 
Mostre uma única mensagem com o resultado.*/
let valorProdutoAntes = prompt("Digite o valor do produto:");
valorProdutoAntes = valorProdutoAntes.replace(",", ".");
valorProduto = Number(valorProdutoAntes);
if (valorProduto <= 0) {
  alert("Digite um valor maior que 0.");
}
let valorPagoAntes = prompt("Digite o valor pago:");
valorPagoAntes = valorPagoAntes.replace(",", ".");
valorPago = Number(valorPagoAntes);
if (valorPago <= 0) {
  alert("Digite um valor maior que 0.");
}
let trocoExato = Number(valorPago - valorProduto);
let trocoMenor = Number(Math.floor(valorPago - valorProduto));
let trocoMaior = Number(Math.ceil(valorPago - valorProduto));
alert(`O valor do produto é: R$ ${valorProduto}
O valor pago é: R$ ${valorPago}
O troco exato é: R$ ${trocoExato.toFixed(2)}
O troco arredondado para cima é: R$ ${trocoMaior}
O troco arredondado para baixo é: R$ ${trocoMenor}`);
