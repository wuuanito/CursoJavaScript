 const frutas = ['manzana','pera','piña','jose '];

 const comidaFav=['pizza','sushi',...frutas];

 console.log(comidaFav);

 const datosLogin={
    usuario:'Juan',
    passwd:'1234'
 };

 const user={
    nombre:'pepe',
    ...datosLogin,
    año:28
 }

 console.log(user);


 const registrarUsuario=(nombre,correo,...datosAdicionales)=>{

    console.log(nombre,correo,datosAdicionales); b 
 };

 registrarUsuario('juan','pepe','juaasdad','afafaf');
