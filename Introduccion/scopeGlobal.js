//SOn variales globales, que se declaran fuera de una funcion se puede acceder a ellas desde cualquier parte del codigo


var nombre = 'juan';

const saludo = ()=>{


    console.log('Hola'+nombre);

};

saludo();


var obtenerNumeroLetras = (nombre) => {
    var numero = nombre.length;
    console.log(`${nombre} tiene ${numero} letras`);

    var funcionAnidada = () => {
        console.log(numero)
    };

funcionAnidada();   
}

obtenerNumeroLetras('juan');
