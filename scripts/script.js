function generarComprobante() {
    const nombre = document.getElementById('nombre').value;
    const bancoDestino = document.getElementById('bancoDestino').value;
    const tipoCuenta = document.getElementById('tipoCuenta').value;
    const numeroCuenta = document.getElementById('numeroCuenta').value;
    const monto = document.getElementById('monto').value;

    // Obtener los valores de año, mes, día, hora y minutos en el formato correcto
    const fechaObj = new Date();
    const año = String(fechaObj.getFullYear()).slice(2);         // Últimos 2 dígitos del año
    const mes = String(fechaObj.getMonth() + 1).padStart(2, '0'); // Mes en formato 2 dígitos
    const dia = String(fechaObj.getDate()).padStart(2, '0');      // Día en formato 2 dígitos
    const hora = String(fechaObj.getHours()).padStart(2, '0');    // Hora en formato 24h (2 dígitos)
    const minutos = String(fechaObj.getMinutes()).padStart(2, '0'); // Minutos en formato 2 dígitos

    // Generar el ID de transacción hasta la parte solicitada
    const transaccionId = 'TEFMBCO' + año + mes + dia + hora + minutos + '11685';

    // Mostrar el resultado en la consola
    console.log("ID de transacción (sin números aleatorios):", transaccionId);

    // Código adicional para redirigir con parámetros
    const formattedMonto = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'CLP' }).format(monto).replace('CLP', '').trim();
    const url = `comprobante.html?nombre=${encodeURIComponent(nombre)}&bancoDestino=${encodeURIComponent(bancoDestino)}&tipoCuenta=${encodeURIComponent(tipoCuenta)}&numeroCuenta=${encodeURIComponent(tipoCuenta + ' ****' + numeroCuenta.slice(-4))}&monto=${encodeURIComponent(formattedMonto)}&fecha=${encodeURIComponent(`${dia}/${mes}/${año} ${hora}:${minutos}`)}&transaccionId=${encodeURIComponent(transaccionId)}`;
    
    // Redirigir a la página de comprobante
    window.location.href = url;
}