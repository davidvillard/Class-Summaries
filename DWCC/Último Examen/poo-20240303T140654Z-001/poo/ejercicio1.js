// POO

// ejercicio: Crea un objeto denominado usuario que permita autenticar a la persona que quiere iniciar sesión en el sistema.

const usuario ={
    nombre: "nombre apellidos",
    nombreUsuario: "userName",
    contraseña: "pwdUser",
    login:function(nombreUsuario,contraseña) {
        if(nombreUsuario === this.nombreUsuario && contraseña === this.contraseña) {
            console.log("Sesión iniciada con éxito")
        } else {
            console.log("Credenciales no válidas")
        }
    }
}
usuario.login('userName','pwdUser') // credenciales correctas
usuario.login('userName','pwUser') // credenciales incorrectas

