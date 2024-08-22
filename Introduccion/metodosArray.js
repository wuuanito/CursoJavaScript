

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


colores.shift(); //eliminar el primer elemento 
console.log(colores);


const colorEliminado = colores.shift(); //SACAR ELEMENTO ELIMINADO
console.log(colorEliminado);
console.log(colores);



const  dias = ['lunes','martes','miercoles'];
console.log(dias);
dias.unshift('antesLunes');  //Agrega elementos al inicio empujando a los demas 
console.log(dias);


const amigos = ['pepe','jose','luis'];
console.log(amigos);
amigos.splice(0,0,'fifa','ruben');   //Inserta Elementos de un array  1º donde empieza 2º cuantos elementos se borran(si pones 0 no borra) 3º los elemetos a añadir
console.log(amigos);


const mejoresAmigos=amigos.slice(1,3); //Copiar elementos y le das un rango 
console.log(mejoresAmigos);


console.log(amigos.indexOf('pepe'));  //Obtenemos el index del primer elemento 

console.log(amigos.lastIndexOf('pepe')); //Obtenemos el index del ultimo elemento 


amigos.forEach((amigos) =>{

    console.log(`Hola ${amigos}`);

});


const resultado=amigos.find( (amigos) =>{

    if(amigos[0]==='f'){
        return amigos;
    }
});

console.log(resultado);


const amigosMayusculas=amigos.map((amigo)=>{

    return amigo.toUpperCase();

});

console.log(amigosMayusculas);


const amigos4letras = amigos.filter((amigo)=>{
    if(amigo.length==5){
        return amigo;
    }
})

console.log(amigos4letras);


console.log(amigos.includes('pepe'));


console.log(amigos.every((amigo)=>{


    if(typeof amigo == 'string'){
        return true;

    }else{
        return false;
    };

}));


console.log(amigos.some((amigo)=>{


    if(typeof amigo !== 'string'){
        return true;

    }else{
        return false;
    };

}));