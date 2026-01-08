const path = require('node:path');

//Barra separadora de carpeta según SO
console.log('Separador de carpetas:', path.sep);

//Unir rutas de carpetas y ficheros
const rutaCompleta = path.join('curso', 'nodejs', 'path', 'index.js');
console.log('Ruta completa unida:', rutaCompleta);

//Nombre del fichero con extensión
const nombreFichero = path.basename(rutaCompleta);
console.log('Nombre del fichero:', nombreFichero);

//Nombre del fichero sin extensión
const nombreSinExtension = path.basename(rutaCompleta, '.js');
console.log('Nombre del fichero sin extensión:', nombreSinExtension);

//extensión del fichero
const extensionFichero = path.extname('/images/images.file.png');
console.log('Extensión del fichero:', extensionFichero);