/*Crie um programa que contenha os seguintes itens:
Crie um comentário explicando a diferença entre os valores null e undefined. 
Apresente um exemplo onde o tipo undefined aparece no JS, e também um exemplo de 
uso prático do tipo null.*/

/*
Quanto ao tipo de valor, undefined é o valor padrão para variáveis que foram declaradas, 
mas ainda não receberam um valor. Variáveis não inicializadas possuem esse valor atribuido automaticamente.
Undefined indica ausência de valor ou não atribuição. 
Geralmente, é o valor que o JavaScript atribui a variáveis que são declaradas, 
mas não inicializadas, ou quando uma função não retorna explicitamente um valor.

Exemplos de situações que resultam em undefined:
Variável declarada, mas sem valor atribuído.
Parâmetro de função ausente.
Função que não retorna um valor explicitamente.

    let x;
    console.log(x);  // undefined

    let resultado = semRetorno();
    console.log(resultado);  // undefined


Enquanto null é usado para indicar que uma variável não tem valor ou que está vazia intencionalmente.
Null é usado para indicar uma ausência intencional de valor. 
Quando você deseja que uma variável não tenha valor, mas deseja deixá-la explícita e clara para o restante do código, 
você atribui o valor null.

Exemplos de situações que resultam em null:
Quando você deseja que uma variável tenha um valor que representa "nenhum valor" de forma intencional.
Para indicar que um objeto não foi inicializado ou ainda não foi atribuído a um valor.

    let y = null;
    console.log(y);  // null

    let usuario = null;  // o valor ainda não foi atribuído
    // Alguma lógica para atribuir um valor à variável
    usuario = { nome: 'João', idade: 30 };
    console.log(usuario);  // { nome: 'João', idade: 30 }
*/
