/*
    O fatorial de um número inteiro não negativo 𝑛 é denotado por 
    𝑛! e é definido como o produto de todos os 
    inteiros positivos menores ou iguais a 𝑛
*/

/* Regras
    - Fatorial de 0: 
      Resultado:  0! = 1
    
    - Fatorial de 3:
      Resultado: 3! = 3×2×1 = 6    

    O fatorial de 𝑛 é o produto dos inteiros positivos de 1 até 𝑛.

*/

function fatorial(n) {
    if (n < 0) 
        return null;
    if (n === 0 || n === 1)
        return 1;

    value = n * fatorial(n-1) 
    return value
}

let resultado = fatorial(3)
console.log(resultado)