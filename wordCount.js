const speech = `I am a  good person. I don't snore at night`;
// console.log(speech.length);

let count = 0;
for (let i = 0; i < speech.length; i++) {
    const char = speech[i];
    // console.log(char);

    if(char === ' ' && speech[i-1] !== ' ') {
        count++;
    }
    
}
count++;
console.log(count);