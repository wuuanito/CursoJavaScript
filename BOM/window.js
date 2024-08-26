window.alert('alert');

console.log(`El ancho de tu navegador es ${window.innerWidth}`);
console.log(`El alto de tu navegador es ${window.innerHeight}`);



let ventana;
const abrirVentana = ()=>{

    ventana=window.open('','Mi nueva ventana','width=500,height=500');
};


const cerrarVentana=()=>{
    ventana.window.close();
}