
let carrito = []

function agregarProducto(nombre, precio) {
    carrito.push({nombre,precio})
    mostrarCarrito();
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    mostrarCarrito();
}

function mostrarCarrito()
{
    const lista = document.getElementById('lista')
    const totalDiv = document.getElementById('total')
    lista.innerHTML = ""
    

    lista.innerHTML = carrito.map((p, i) => 
        `<li>${p.nombre} - $${p.precio} <button onclick="eliminarProducto(${i})">Borrar</button></li>`
    )
  
    const total = carrito.reduce((suma, p) => suma + p.precio, 0);
    totalDiv.textContent = total;

}



/*

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarProducto(nombre, precio) {
    carrito.push({ nombre, precio });
    guardarYMostrar();
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    guardarYMostrar();
}


function guardarYMostrar() {
    
    localStorage.setItem('carrito', JSON.stringify(carrito));
    const lista = document.getElementById('lista');
    const totalDiv = document.getElementById('total');

   
    lista.innerHTML = carrito.map((p, i) => 
        `<li>${p.nombre} - $${p.precio} <button onclick="eliminarProducto(${i})">Borrar</button></li>`
    ).join('');

    
    const total = carrito.reduce((suma, p) => suma + p.precio, 0);
    totalDiv.textContent = total;
}



*/

function enviarSolicitud() {
    // Si la red se cayó o está en Offline
    if (!navigator.onLine) {
        
        
        // 2. Forzamos un reenvío de formulario o recarga de la página hacia el servidor
        // Al intentar conectarse sin internet, Chrome interrumpe la carga y despliega su pantalla nativa de error.
        window.location.href = window.location.href + '?solicitud=' + Date.now();
        return;
    }

    // Si hay internet, la solicitud continúa
    alert('✅ Solicitud enviada correctamente');
}