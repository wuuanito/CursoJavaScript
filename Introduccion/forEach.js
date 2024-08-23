const amigos=['juan','pepe','jose'];

amigos.forEach((amigos,index)=>{
    console.log(`El amigo ${amigos} con numero ${index}`);
})

const persona={
    nombre:'Juan',
    edad:28,
};

for(propiedad in persona){
    console.log('Hola');
    console.log(persona[propiedad]);
};


const etiquetas= document.head.children;
console.log(etiquetas);


for (elemento of etiquetas){
    console.log(elemento);
}