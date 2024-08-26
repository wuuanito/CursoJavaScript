window.alert('Alerta basica');

const ingresar= ()=>{
    const accesoPermitido=confirm('Eres mayor de edad?');
    if(accesoPermitido){
        alert('Bienvenido');
    }else{
        alert('uiui no creo');
    }
}
 const saludar=()=>{

   const nombre= prompt('Escribe tu nombre');
   alert(`Bienvenido ${nombre}`);
 };