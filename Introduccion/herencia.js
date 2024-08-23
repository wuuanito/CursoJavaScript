class Usuario{
    

    constructor(usuario,contraseña){
        this.usuario=usuario;
        this.contraseña=contraseña;
    }

    obtenerPosts(){
        const post= ['post1','post2'];
        return post;
    }

}

class Moderador extends Usuario{
    constructor(usuario, contraseña,permisos){
        super(usuario,contraseña);
        this.permisos=permisos;

    }
     
}


const usuario1 = new Usuario('juan','pepe');

console.log(usuario1.obtenerPosts());

