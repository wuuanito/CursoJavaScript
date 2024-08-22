const colores = ["rojo", "verde", "amarillo"];

console.log (colores.length); //CANTIDAD DE ELEMENTOS DE UN ARRAY


//document.body.innerHTML = colores.toString(); //TRANSFORMA EL ARRAY EN UNA CADENA DE TEXTO

console.log(colores.join(' - - ')) // Elegir como se separa cada elemento del array

console.log(colores.sort()); // ORDENAR

console.log(colores.reverse()); //ORDENA AL REVES

const letras = ['pepe',1,'juan'];

const array3=(colores.concat(letras)); //Junta varios arrays

console.log(array3);


colores.push('jose'); //Agregar elemento 
console.log(colores);


colores.pop(); //Eliminar el ultimo elemento 
console.log(colores);
