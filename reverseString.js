
function reverseString(str) {
    let reverse = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        reverse = char + reverse;

    }
    return reverse;
}


const statement = `Hello Alien bhai brother.`;
const forAlien = reverseString(statement);
console.log(forAlien);