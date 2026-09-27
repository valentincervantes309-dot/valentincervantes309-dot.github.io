
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
function enviarSolicitud(event) {
    // Si no hay red al intentar enviar la solicitud
    if (!navigator.onLine) {
        
        // 1. Limpiamos los datos del estado para simular que el sistema no guardó nada
        if (typeof carrito !== 'undefined') carrito = [];
        localStorage.removeItem('carritoGuardado');

        // 2. Forzamos la navegación real hacia la misma ruta del servidor/repositorio.
        // Al estar Offline, el navegador no podrá establecer el apretón de manos (handshake) 
        // con el servidor del repositorio y desplegará la pantalla nativa de error.
        window.location.href = window.location.pathname + '?reload=' + Date.now();
        
        return false;
    }

    // Si SÍ hay internet, la solicitud continúa normalmente
    alert('✅ Solicitud enviada correctamente al servidor.');
}
