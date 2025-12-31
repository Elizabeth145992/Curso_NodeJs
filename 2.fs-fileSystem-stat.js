const fs = require('node:fs');

const stats = fs.statSync('./info.txt');
console.log(
    stats.isFile(), //Es un fichero
    stats.isDirectory(), //Es un directorio
    stats.isSymbolicLink(), //Es un enlace simbólico
    stats.size //Tamaño en bytes
);