/*Crie um programa que contenha os seguintes itens:
Crie um comentário explicando a diferença entre let e const. Mostre exemplos de uso.
Crie um comentário explicando porque utilizar var ou variáveis não declaradas 
é uma má prática.*/

/*let 
As variáveis de let podem ser atualizadas(mutáveis), mas não podem ser declaradas novamente.
    let idade = 25;
    idade = 26;  // Isso é permitido
Já as variáveis const são usadas exclusivamente para valores constantes. 
    const nome = 'João';
    nome = 'Maria';  // Erro: Assignment to constant variable.

Contudo, ambas têm escopo de bloco, isto é, são limitadas ao bloco em que são definidas.
Escopo
    if (true) {
    let x = 10;
    const y = 20;
    }
    console.log(x);  // Erro: x não está definido
    console.log(y);  // Erro: y não está definido

Há também a possibilidade de ambas serem levadas ao topo do escopo de execução, mas não inicializadas.
    console.log(a);  // Erro: Cannot access 'a' before initialization
    let a = 10;

    console.log(b);  // Erro: Cannot access 'b' before initialization
    const b = 20;
*/

/*O uso de var não é considerado uma boa prática, principalmente porque ele tem algumas limitações 
e comportamentos inesperados que podem causar erros:
var tem escopo de função, isto significa que a variável ainda será visível por todo o código, 
podendo gerar comportamentos inesperados.
    if (true) {
    var x = 10;
    }
    console.log(x);  // x é 10, mesmo fora do bloco if

Var sofre hoisting, sua declaração é levada para o topo do escopo, mas a inicialização não, podendo gerar confusão e 
erros difíceis de identificar, pois conseguimos acessar a variável antes de sua inicialização.
    console.log(a);  // undefined, não erro
    var a = 5;
A declaração da mesma variável múltiplas vezes no mesmo escopo é permitida, gerando problemas de reatribuição acidental.
    var x = 10;
    var x = 20;  // Isso é permitido com var, mas não é uma prática segura

Quando você usa uma variável sem declará-la (por exemplo, escrevendo apenas x = 10; sem usar var, let ou const), 
o JavaScript automaticamente a cria como uma variável global, caso esteja em um escopo global. 
Isso pode causar sérios problemas, especialmente em aplicações grandes ou em ambientes de produção, 
onde uma variável global não planejada pode ser sobrescrita ou entrar em conflito com outras variáveis.
    function exemplo() {
        x = 10;  // x não foi declarada com let, var ou const
    }

    exemplo();
    console.log(x);  // 10 - x foi criada como uma variável global

*/

/*Conclusão
Devido a esses comportamentos:
Escopo: var tem escopo de função, enquanto let e const têm escopo de bloco.
Hoisting: O hoisting do var pode causar comportamentos inesperados.
Reatribuição e redeclaração: var permite reatribuições e redeclarações dentro do mesmo escopo, o que pode causar problemas.
as variáveis let e const são preferíveis à var, pois fornecem um controle mais rigoroso e previsível 
sobre o escopo e o comportamento das variáveis. Usar let e const ajuda a evitar bugs sutis e torna o código mais seguro e legível.
Se uma variável for criada sem ser declarada explicitamente, pode ser difícil entender o fluxo do código, 
especialmente em projetos grandes. A variável pode ser acessada e modificada em diferentes lugares do código 
sem uma clara indicação de onde ela foi criada ou qual seu escopo. Isso pode resultar em bugs ou 
mudanças inesperadas no comportamento do código ao longo do tempo.
*/
