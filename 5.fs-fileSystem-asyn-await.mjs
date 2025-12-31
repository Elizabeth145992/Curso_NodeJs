import { readFile } from 'node:fs/promises';

console.log('Leyendo el primer fichero...');
const data = await readFile('./info.txt', 'utf-8');
console.log(data);


console.log('Haciendo cosas mientras se lee el primer fichero...');

console.log('Leyendo el segundo fichero...');
const data2 = await readFile('./info2.txt', 'utf-8');
console.log(data2);