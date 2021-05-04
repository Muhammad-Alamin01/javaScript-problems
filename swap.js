let a = 5;
let b = 8;
console.log('Before swap: a =', a, 'b =',b);


let temp = a;
a = b;
b = temp;
console.log('After swap: a =', a, 'b =',b);


let x = 6;
let y = 7;
x = x + y;
y = x - y;
x = x - y;
console.log('After swap: x =', x, 'y =', y);


// destructuring
let p = 7;
let q = 8;
[p, q] = [q, p];
console.log('After swap: p =', p, 'q =',  q);
