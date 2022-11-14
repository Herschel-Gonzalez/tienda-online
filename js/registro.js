
let usuarios = [];
cargarUsuarios();
function crearUsuario() {
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let password = document.getElementById('password').value;
    
    let usuario = {
        nombre: nombre,
        correo: correo,
        password: password,
        tipo: "cliente"
    }

    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert("Registro existoso");

}

function cargarUsuarios() {
    let users = JSON.parse(localStorage.getItem('usuarios'));
    usuarios=users;
}

