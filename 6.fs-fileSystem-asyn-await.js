const fs = require('node:fs/promises');

//IIFE (Immediately Invoked Function Expression)
(async () => {

console.log('Leyendo el primer fichero...');
const data = await fs.readFile('./info.txt', 'utf-8');
console.log(data);

console.log('Haciendo cosas mientras se lee el primer fichero...');

console.log('Leyendo el segundo fichero...');
const data2 = await fs.readFile('./info2.txt', 'utf-8');
console.log(data2);
})();