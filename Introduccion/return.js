


const minicalculadora = (tipo,numero1,numero2) => {

    let resultado;

    if (tipo==='suma'){
       resultado=(numero1+numero2);
    }
    else if (tipo === 'resta'){
        resultado=(numero1-numero2);
    }
    else{
        resultado=('No es ni suma ni resta');
    }
        return resultado;
};

const miReturn=minicalculadora('suma',1,2);

console.log(miReturn);
