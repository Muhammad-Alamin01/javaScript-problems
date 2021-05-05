// 1, 1, 2, 3, 5, 8, 13, 21,
// Iterative
function fibonacci(num) {
    let fibo = [1, 1];
    for (let i = 2; i <= num; i++) {
        let nextFibo = fibo[i - 1] + fibo[i - 2];
        fibo.push(nextFibo);
        
    }
    return fibo;
}

// const result = fibonacci(10);
// console.log(result);


// 1, 1, 2, 3, 5, 8, 13, 21,
// Recursive
function fibonacciRecursive(num) {
    if(num === 0) {   // stopping condition
        return [1];

    }
    if(num === 1) {    // stopping condition
        return [1, 1];
    }
    let fibo = fibonacciRecursive(num - 1);
    const nextFibo = fibo[num  -1] + fibo[num - 2]
    fibo.push(nextFibo);

    return fibo;

}


const result = fibonacciRecursive(10);
console.log(result);