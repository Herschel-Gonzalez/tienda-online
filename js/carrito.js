let carrito = [];

cargarCarrito();
mostrarCarrito();

//sesion

let sesion = JSON.parse(localStorage.getItem('sesion'));

if (sesion.sesion=='true') {
    let texto = '<a class="navbar-brand" id="is" onclick="cerrarSesion()">Cerrar sesión</a>';
    document.getElementById("is").innerHTML=texto;
}



function cerrarSesion() {
    sesion.sesion='false';
    let texto = '<a class="navbar-brand" id="is" href="login.html">Iniciar Sesión</a>';
    document.getElementById("is").innerHTML=texto;
    localStorage.setItem('sesion', JSON.stringify(sesion));
    alert('Sesion cerrada');
}


//fin sesion



function cargarCarrito() {
    let carro = JSON.parse(localStorage.getItem('carrito'));
    carrito = carro;

}

function mostrarCarrito() {
    let tabla = "<table>";
    let table = document.getElementById("contenido");
    tabla+="<thead>";
    tabla+="<tr>";
    tabla+="<td>";
    tabla+="Producto";
    tabla+="</td>";
    tabla+="<td>";
    tabla+="Descripcion";
    tabla+="</td>";
    tabla+="<td>";
    tabla+="Precio";
    tabla+="</td>";
    tabla+="<td>";
    tabla+="Imagen";
    tabla+="</td>";
    tabla+="</tr>";
    tabla+="</thead>";

    let sesionActual = JSON.parse(localStorage.getItem('sesion'));

    let conProductos = false;

    for (const producto of carrito) {
        
       // console.log(producto);
        if (producto.sesion.usuario.correo == sesionActual.usuario.correo) {
            tabla+="<tr>";
            tabla+="<td>";
            tabla+=producto.producto.nombre;
            tabla+="</td>";
            tabla+="<td>";
            tabla+=producto.producto.descripcion;
            tabla+="</td>";
            tabla+="<td>";
            tabla+=producto.producto.precio;
            tabla+="</td>";
            tabla+="<td>";
            tabla+='<img src="' + producto.producto.imagen + '" widht="200" height="200">';
            tabla+="</td>";
            tabla+="</tr>";
            conProductos=true;
        }
        
    }

    if (conProductos==false) {
        tabla = "Sin productos en el carrito";
    }else{
        tabla+="</table>";

        tabla+="<br><button>Proceder al pago</button>";
    
        tabla+=" <button>Vaciar carrito</button>";
    }

   

    table.innerHTML=tabla;

}

