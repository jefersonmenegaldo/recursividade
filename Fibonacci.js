/* A Sequencia se inicia com
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,
*/

/* Regras
    -   Cada número na sequência é a soma dos dois números que o precedem. 
        Isto define a relação de recorrência que é central para a geração da sequência.
*/

function fibonacci(n) {
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let element = []
for (let index = 0; index < 10; index++) {
    element[index] = fibonacci(index);
}
console.log(element);

