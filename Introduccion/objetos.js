
const persona= {
    nombre:'juan',
    apellido:'frauca',
    edad:27,
    suscripciones:{
        web:true,
        correo:false,
    },
    coloresFavoritos:['negro','rojo'],
    saludo: function(){
        alert('Hola desde persona');
    }
    
}

persona.saludo();