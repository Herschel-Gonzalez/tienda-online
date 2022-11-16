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

let productos = [];
let imagenes = [];

cargarProductos();
mostrarProductos();

function cargarProductos() {
    let productoss = JSON.parse(localStorage.getItem('productos'));
    productos = productoss;
}

function mostrarProductos() {
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
    tabla+="<td>";
    tabla+="Acciones";
    tabla+="</td>";
    tabla+="</tr>";
    tabla+="</thead>";

    let index = 0;

    for (const producto of productos) {
        tabla+="<tr>";
        tabla+="<td>";
        tabla+=producto.nombre;
        tabla+="</td>";
        tabla+="<td>";
        tabla+=producto.descripcion;
        tabla+="</td>";
        tabla+="<td>";
        tabla+=producto.precio;
        tabla+="</td>";
        tabla+="<td>";
        tabla+='<img src="' + producto.imagen + '" widht="200" height="200">';
        tabla+="</td>";
        tabla+="<td>";
        tabla+="<button onclick='modificar("+index+")'>Modificar</button><br><br>";
        tabla+="<button onclick='eliminar("+index+")'>Eliminar</button>";
        tabla+="</td>";
        tabla+="</tr>";
        index++;
    }

    tabla+="</table>";

    table.innerHTML=tabla;
}


function eliminar(posicion) {
    let nuevoContenedor = [];
    for (let i = 0; i < productos.length; i++) {
        if (i!=posicion) {
            nuevoContenedor.push(productos[i]);
        }
        
    }
    localStorage.setItem('productos', JSON.stringify(nuevoContenedor));
    alert('se elimino con exito el producto');
    cargarProductos();
    mostrarProductos();

}



function modificar(posicion) {

    let product = productos[posicion];
    let formu = 'Nombre <input type="text" id="nom" value="'+product.nombre+'"><br><br>';
    formu+='Descripcion  <input type="text" id="desc" value="'+product.descripcion+'"><br><br>';
    formu+='Precio  <input type="number" id="prec" value="'+product.precio+'"><br><br>';
    formu+='Imagen <input type="file" id="imag" accept=".jpg, .jpeg, .png"><br><br>';
    formu+='<button onclick="getImagenes('+posicion+')">Guardar</button>';
    document.getElementById("contenido").innerHTML=formu;
}

function guardarModificado(posicion) {
    let product = productos[posicion];
    product.nombre= document.getElementById("nom").value;
    product.descripcion= document.getElementById("desc").value;
    product.precio= document.getElementById("prec").value;
    product.imagen=imagenes[0];

    productos[posicion]=product;

    localStorage.setItem('productos',JSON.stringify(productos));

    alert("se modifico con exito el producto");
    cargarProductos();
    mostrarProductos();
    

}

function getImagenes(pos) {
    let imagen = document.getElementById('imag').files[0];
    readImage(imagen,pos);
}

function readImage(file,pos) {
    // Check if the file is an image.
    
    if (file.type && !file.type.startsWith('image/')) {
      console.log('File is not an image.', file.type, file);
      return;
    }
  
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        imagenes.push(event.target.result);
        if (imagenes.length==1) {
            guardarModificado(pos);
        }
        
    });
    reader.readAsDataURL(file);
  }