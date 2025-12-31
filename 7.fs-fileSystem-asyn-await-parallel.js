import { readFile } from 'node:fs/promises';

Promise.all([
  readFile('./info.txt', 'utf-8'),
  readFile('./info2.txt', 'utf-8')])
  .then(([data, data2]) => {
    console.log('Contenido del primer fichero:');
    console.log(data);

    console.log('Contenido del segundo fichero:');
    console.log(data2);
  })
  .catch(err => {
    console.error('Error leyendo los ficheros:', err);
  });