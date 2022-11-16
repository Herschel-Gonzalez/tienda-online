//sesion

let sesion = JSON.parse(localStorage.getItem('sesion'));

if (sesion.sesion=='true') {
    let texto = '<a class="navbar-brand" id="is" onclick="cerrarSesion()">Cerrar sesión</a>';
    document.getElementById("is").innerHTML=texto;
}


if (sesion.tipo=='cliente') {
    window.open('index.html',"_self");
}


function cerrarSesion() {
    sesion.sesion='false';
    let texto = '<a class="navbar-brand" id="is" href="login.html">Iniciar Sesión</a>';
    document.getElementById("is").innerHTML=texto;
    localStorage.setItem('sesion', JSON.stringify(sesion));
    alert('Sesion cerrada');
}


//fin sesion