const numbers = [42, 63, 12, 75, 24, 64, 13, 86, 34,12,64,1,1];
const uniqueNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    let index = uniqueNumbers.indexOf(element);
    if(index == -1){
        uniqueNumbers.push(element);
    }
    
}

console.log(uniqueNumbers);