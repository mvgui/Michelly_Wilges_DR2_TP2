/*Crie um programa que receba na entrada o valor de três notas de um aluno
 - com valor entre 0 e 10 e informe a média entre elas. */
let nota1 = Number(prompt("Digite a primeira nota:"));
if (Number.isNaN(nota1) || nota1 < 0 || nota1 > 10) {
  alert("Este programa espera um número entre 0 e 10.");
} else {
  let nota2 = Number(prompt("Digite a segunda nota:"));
  if (Number.isNaN(nota2) || nota2 < 0 || nota2 > 10) {
    alert("Este programa espera um número entre 0 e 10.");
  } else {
    let nota3 = Number(prompt("Digite a terceira nota:"));
    if (Number.isNaN(nota3) || nota3 < 0 || nota3 > 10) {
      alert("Este programa espera um número entre 0 e 10.");
    } else if (
      nota1 >= 0 &&
      nota1 <= 10 &&
      nota2 >= 0 &&
      nota2 <= 10 &&
      nota3 >= 0 &&
      nota3 <= 10
    ) {
      let media = Number((nota1 + nota2 + nota3) / 3);
      alert(`A média do aluno é ${media.toFixed(1)}`);
    }
  }
}
