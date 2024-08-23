class Usuario{
    tipo='usuario';


    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
        console.log('nuevo usuario')
    }

    obtenerNombreCompleto(){
        console.log('ObteniendoDatos....')
        return `${this.nombre} ${this.apellido}`
    }
}

const usuario1=new Usuario('juan','frauca');
const usuario2=new Usuario('ale','ff');
usuario1.obtenerNombreCompleto();
console.log(usuario1.obtenerNombreCompleto());
