/*[Faça esse em grupo] - Crie um programa que peça que o usuário escolha entre Pedra, 
Papel ou Tesoura (pode ser uma entrada numérica = 1, 2 ou 3). 
O programa deve escolher uma dessas opções aleatoriamente e em seguida deve informar 
para o usuário qual foi a escolha sorteada pelo programa e se ele ganhou ou não do 
programa.*/
let opPrograma = Math.floor(Math.random() * 3) + 1;
opPrograma = Math.round(opPrograma);
let opUsuario = Number(
  prompt("Digite 1 para pedra, 2 para papel ou 3 para tesoura:")
);

if (
  opUsuario != null &&
  !Number.isNaN(opUsuario) &&
  Number.isInteger(opUsuario) &&
  opUsuario >= 1 &&
  opUsuario <= 3
) {
  if (opUsuario === opPrograma) {
    alert(`Você escolheu ${opUsuario} e o programa escolheu ${opPrograma}.
        Houve empate!`);
  } else if (opUsuario === 1) {
    if (opPrograma === 3) {
      alert(`Você escolheu ${opUsuario} e o programa escolheu ${opPrograma}.
            Você ganhou!`);
    } else {
      alert(`Você escolheu ${opUsuario} e o programa escolheu ${opPrograma}.
                        Você perdeu!`);
    }
  }

  if (opUsuario === 2) {
    if (opPrograma === 1) {
      alert(
        `Você escolheu ${opUsuario} e o programa escolheu ${opPrograma}.Você ganhou!`
      );
    } else {
      alert(`Você escolheu ${opUsuario} e o programa escolheu ${opPrograma}.
                                        Você perdeu!`);
    }

    if (opUsuario === 3) {
      if (opPrograma === 1) {
        alert(`Você escolheu ${opUsuario} e o programa escolheu ${opPrograma}.
                                            Você ganhou!`);
      } else {
        alert(`Você escolheu ${opUsuario} e o programa escolheu ${opPrograma}.
                                                        Você perdeu!`);
      }
    }
  }
} else alert("Este programa espera receber um número inteiro entre 1 e 3.");
