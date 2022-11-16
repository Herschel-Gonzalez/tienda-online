let productos = [];
let imagenes = [];

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


function crearProducto() {
    cargarProductos();
    let nombre = document.getElementById('nombre').value;
    let descripcion = document.getElementById('descripcion').value;
    let precio = document.getElementById('precio').value;
    let imagen = imagenes[0];

    let producto = {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        imagen: imagen

    }

    productos.push(producto);
    alert("se agrego correcamente el producto");
    localStorage.setItem('productos', JSON.stringify(productos));

}

function cargarProductos() {
    let products = JSON.parse(localStorage.getItem('productos'));
    productos = products;
}


function getImagenes() {
    let imagen = document.getElementById('imagen').files[0];
    readImage(imagen);
}

function readImage(file) {
    // Check if the file is an image.
    
    if (file.type && !file.type.startsWith('image/')) {
      console.log('File is not an image.', file.type, file);
      return;
    }
  
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        imagenes.push(event.target.result);
        if (imagenes.length==1) {
            crearProducto();
        }
        
    });
    reader.readAsDataURL(file);
  }