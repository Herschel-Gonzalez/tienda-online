let products = [];
let carrito = [];
let capa = document.getElementById("capa");


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

listarProductos();

function listarProductos() {
    cargarProductos();

    if (products.length > 0) {
        let lista = '<main>';
        lista+='<img id="imagen" src="img/banner1.jpg" class="card-img-top" >';
        lista+='<div class="pricing-header px-3 py-3 pt-md-3 pb-md-4 my-4 mx-auto text-center">';
        lista+='<h1 class="display-4 mt-4">MINISO</h1>';
        lista+='<p class="lead">from japan to the world!</p>';
        lista+='</div><div class="container" id="lista-productos">';
        let posicion = 0;
        for (const producto of products) {
            lista += '<div class="card-deck mb-3 text-center">';

            lista += '<div class="card mb-4 shadow-sm">';
            lista += '<div class="card-body">';
            lista += '<img src="' + producto.imagen + '" class="card-img-top" width="200" height="400">';
            lista += '<div class="card-header">';
            lista += '<h4 class="my-0 font-weight-bold">' + producto.nombre + '</h4>';
            lista += '</div>';

            lista += '<ul class="list-unstyled mt-3 mb-4">';
            lista += '<li> ' + producto.descripcion + '</li>';
            lista += '<li><h1 class="card-title pricing-card-title precio">$<span class="">' + producto.precio + '</span></h1></li>';
            lista += '</ul>';
            lista += '<button class="btn btn-block btn-primary agregar-carrito" onclick="agregarAlcarrito('+posicion+')" data-id="1">Agregar al carrito</button>';
            lista += '   </div>';
            lista += '</div>';
            posicion++;
        }
        lista += '</div></main>';
        capa.innerHTML = lista;
    } else {
        capa.innerHTML = "No hay productos";
    }


}

function cargarProductos() {
    let productoss = JSON.parse(localStorage.getItem('productos'));
    products = productoss;
}

function modificarProducto(posicion) {
    //alert("dedede");
    //alert("llego");
    let prodAmodificar = products[posicion];
    let aler = "<h1>Modificara"+prodAmodificar.nombre+"</h1>";
    aler+='<button id="close">Cerrar</button> ';
    crearAlerta(aler);
    //window.open("modificarProducto.html","_self");

}

//carrito

function agregarAlcarrito(posicion) {
    cargarCarrito();
    let prod = products[posicion];
    let sesion = JSON.parse(localStorage.getItem('sesion'));
    let registro = {
        producto: prod,
        sesion: sesion
    }
    carrito.push(registro);
    localStorage.setItem('carrito',JSON.stringify(carrito));
    alert("se agrego correctamente al carrito");

}

function cargarCarrito() {
    let carro = JSON.parse(localStorage.getItem('carrito'));
    carrito = carro;

}


//fin carrito


function guardarModificado(posicion) {
    let nom = document.getElementById('nom').value;
    let descripcion = document.getElementById('desc').value;
    let precio = document.getElementById('prec').value;
    let imagen = imagenes[0];

    let producto = {
        nombre: nom,
        descripcion: descripcion,
        precio: precio,
        imagen: imagen

    }
    let index = 0;
    for (const producto of products) {
        if (producto.nombre==nombre) {
            index = products.indexOf(producto);
        }
    }

    products[index]=producto;

    //productos.push(producto);
    localStorage.setItem('productos', JSON.stringify(products));
    alert("se agrego correcamente el producto");
    
}

function crearAlerta(contenido) {
    let alerta = document.getElementById("alerta");
    alerta.innerHTML=contenido;

    const open = document.getElementById('open');
    const modal_container = document.getElementById('modal_container');
    const close = document.getElementById('close');
    
    open.addEventListener('click', () => {
        modal_container.classList.add('show');
    });
    
    close.addEventListener('click', () => {
        modal_container.classList.remove('show');
    });

    document.getElementById("open").click();

}

