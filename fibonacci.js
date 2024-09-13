
function createFibonacci(value) {   
    var fibSequence = [0, 1];
    while(fibSequence[fibSequence.length - 1] < value) {
        let nextValue = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
        fibSequence.push(nextValue);
    }
    return fibSequence;
}

function isNumberInFobonacci(num) {
    let fibonacciSequence = createFibonacci(num);
    if (fibonacciSequence.includes(num)) {
        return `O número ${num} está na sequência de Fibonacci`;
    } else {
        return `O número ${num} não está na sequência de Fibonacci`;
    }
}

console.log(isNumberInFobonacci(4));
console.log(isNumberInFobonacci(13));
console.log(isNumberInFobonacci(0));

// O número 4 não está na sequência de Fibonacci
// O número 13 está na sequência de Fibonacci
// O número 0 está na sequência de Fibonacci

