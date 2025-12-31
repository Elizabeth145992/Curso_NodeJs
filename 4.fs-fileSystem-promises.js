/*
ESto se usa solo en los modulos nativos de nodejs que no cuentan con su version de promesas
const {promisify} = require('node:util');
const readFileAsync = promisify(fs.readFile);

console.log('Leyendo fichero con promisify...');
readFileAsync('./info3.txt', 'utf-8')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error('Error leyendo el fichero:', err);
    });

*/
const fs = require('node:fs/promises');

console.log('Leyendo el primer fichero...');
fs.readFile('./info.txt', 'utf-8')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error('Error leyendo el fichero:', err);
    });


console.log('Haciendo cosas mientras se lee el primer fichero...');

console.log('Leyendo el segundo fichero...');
fs.readFile('./info2.txt', 'utf-8')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error('Error leyendo el fichero:', err);
        return;
    });