const saludo = (nombre) => {
    console.log(`Hola ${nombre}`);
};

saludo('Juan');


const operacion = (numero1,numero2)=> {
    console.log(numero1+numero2);
};

operacion(1,2);


const minicalculadora = (tipo,numero1,numero2) => {

    if (tipo==='suma'){
        console.log(numero1+numero2);
    }
    else if (tipo === 'resta'){
        console.log(numero1-numero2);
    }
    else{
        console.log('No es ni suma ni resta');
    }
};

minicalculadora('suma',1,2);