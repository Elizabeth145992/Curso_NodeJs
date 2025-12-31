const os = require('node:os');
//import os from 'node:os'; // ES Modules

console.log('Sistema Operacional:', os.platform());
console.log('Versión del SO:', os.release());
console.log('Arquitectura del CPU:', os.arch());
console.log('cPU Info:', os.cpus());
console.log('memoria Libre (bytes):', os.freemem() / 1024 / 1024, 'MB');
console.log('Memoria Total (bytes):', os.totalmem() / 1024 / 1024, 'MB');
console.log('uptime del Sistema (segundos):', os.uptime() / 60 / 60 / 24, 'días');