// .js por defecto utiliza commonjs
// .mjs utiliza módulos ES6 (ES Modules)
//.cjs es para indicar que es un módulo común de Node.js

import { sum } from './sum.mjs';

console.log(sum(5, 3));