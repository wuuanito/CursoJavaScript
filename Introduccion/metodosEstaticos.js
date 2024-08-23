class Usuario{


    constructor(nombre,correo){
        this.nombre=nombre;
        this.correo=correo;
    };

    static borrarUsuario(id_usuario){

        console.log(`Usuario con id ${id_usuario} ha sido eliminado`);
    }

   static registrados =1000;
}




Usuario.borrarUsuario(143214);
console.log(Usuario.registrados);