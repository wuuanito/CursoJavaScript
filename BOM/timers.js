

const saludo = ()=>{

    console.log('saludar')
};

let id;
const iniciar = ()=>{
    console.log('iniciando Timer');
     id=setTimeout(saludo,3000);
}

const parar= ()=>{
    console.log('Parando');
    clearTimeout(id);
}

let cuenta = 0;
let idtimer;
const iniciarCuenta = ()=>{

     idtimer=setInterval(()=>{
        console.log(cuenta);
        cuenta++;
    },1000);
    
};

const pararCuenta = ()=>{

    console.log('Paramos la cuenta');
    clearInterval(idtimer);
};
