const usuario = {
    nombre : 'Juan',
    edad:27,
    amigos:['pepe','martin','jose'],
    saludo: ()=>{
        console.log('Hola!');
    },
};

usuario.saludo();


const resultados=Object.keys(usuario);
 console.log(resultados);

 const valores = Object.values(usuario);
 console.log(valores);

 const keyYvalroes = Object.entries(usuario);
 console.log(keyYvalroes);
