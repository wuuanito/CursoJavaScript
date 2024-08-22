
const texto ='Hola soy juan';

console.log(texto.length);

const indexPrimer=texto.toLowerCase().indexOf('h');
const indexUltimo=texto.toLowerCase().lastIndexOf('j');

console.log(indexPrimer);
console.log(indexUltimo);

console.log(texto.slice(2,5));

console.log(texto.replace('juan','pedro'));

console.log(texto.split(' '));