/*
Crie um programa que solicite um número maior que zero e calcule o seu quadrado, 
seu cubo e sua raiz quadrada, exibindo o resultado.
*/
let numero = Number(prompt("Digite um número maior que zero:"));
if (numero > 0) {
  let quad = Math.pow(numero, 2);
  let cubo = Math.pow(numero, 3);
  let raiz = Math.sqrt(numero);
  alert(
    "O número ao quadrado é: " +
      quad +
      "\nO número ao cubo é: " +
      cubo +
      "\nA raiz do número é: " +
      raiz.toFixed(3)
  );
} else {
  alert("Digite um número maior do que 0.");
}
