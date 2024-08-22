//Pertene todas las variables declaradas con const o let dentro de un bloque

const edad= 19;
const accesoPermitido=false;
if (edad>=18){
    const accesoPermitido=true; //SOLO SE PUEDE ACCEDER DESDE EL BLOQUE
    console.log(accesoPermitido);
}

console.log(accesoPermitido);