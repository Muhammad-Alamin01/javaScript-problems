const numbers = [42, 63, 12, 75, 24, 64, 13, 86, 34];

function getArraySum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;

    }
    return sum;
}


const result = getArraySum(numbers);
console.log(`Total of the numbers: ${result}`);