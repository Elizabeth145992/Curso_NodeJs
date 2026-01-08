const fs = require('node:fs');

console.log('Leyendo el primer fichero...');
fs.readFileSync('./info.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error leyendo el fichero:', err);
        return;
    }
    console.log(data);
});


console.log('Haciendo cosas mientras se lee el primer fichero...');

console.log('Leyendo el segundo fichero...');
fs.readFileSync('./info2.txt', 'utf-8',(err, data) => {
    if (err) {
        console.error('Error leyendo el fichero:', err);
        return;
    }
    console.log(data);
});