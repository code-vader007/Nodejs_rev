//Need to require for using other modules
//One flavor to import
const names = require('./names');
const sayhi = require('./utils');

console.log(names)
console.log(sayhi)
sayhi(names.john)