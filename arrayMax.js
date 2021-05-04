const marks = [43, 23, 35, 75, 24, 33, 65, 13, 67];
let max = marks[0];

for (let i = 0; i < marks.length; i++) {
    const element = marks[i];

    if(element > max) {
        max = element;
    }
    
}

console.log('Highest value is: ', max);