
let usuarios = [];
cargarUsuarios();


function iniciarSesion() {
    let correo = document.getElementById('correo').value;
    let password = document.getElementById('password').value;

    let existe = false;

    for (const usuario of usuarios) {
        if (usuario.correo == correo && usuario.password == password) {
            alert("sesion iniciada");
            existe = true;
            window.open("administrador.html","_self");
            //guardamos la sesion
            let sesion = {
                usuario: correo,
                sesion:"true",
                tipo: usuario.tipo
            };
            localStorage.setItem('sesion', JSON.stringify(sesion));
            if (usuario.tipo == "admin") {
                window.open("administrador.html","_self");
            }else{
                window.open("index.html","_self");
            }
        }
    }

    if (existe ==false) {
        alert("datos incorrectos, verifica tus credenciales");
    }

}

function cargarUsuarios() {
    let users = JSON.parse(localStorage.getItem('usuarios'));
    usuarios=users;
}
