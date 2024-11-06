function generarComprobante() {
    const nombre = document.getElementById('nombre').value;
    const bancoDestino = document.getElementById('bancoDestino').value;
    const tipoCuenta = document.getElementById('tipoCuenta').value;
    const numeroCuenta = document.getElementById('numeroCuenta').value;
    const monto = document.getElementById('monto').value;

    const maskedNumeroCuenta = tipoCuenta + ' ****' + numeroCuenta.slice(-4);
    
    // Generar fecha y hora en formato específico
    const fechaObj = new Date();
    const año = String(fechaObj.getFullYear()).slice(2);         // Últimos 2 dígitos del año
    const mes = String(fechaObj.getMonth() + 1).padStart(2, '0'); // Mes en formato 2 dígitos
    const dia = String(fechaObj.getDate()).padStart(2, '0');      // Día en formato 2 dígitos
    const hora = String(fechaObj.getHours()).padStart(2, '0');    // Hora en formato 24h (2 dígitos)
    const minutos = String(fechaObj.getMinutes()).padStart(2, '0'); // Minutos en formato 2 dígitos

    // Generar exactamente 7 dígitos aleatorios
    const generarSecuenciaNumerica = () => {
        let secuencia = '';
        for (let i = 0; i < 7; i++) {
            secuencia += Math.floor(Math.random() * 10);
        }
        return secuencia;
    };

    // Crear el ID de transacción en el formato solicitado
    const secuenciaAleatoria = generarSecuenciaNumerica(); // Solo 7 dígitos aleatorios
    const transaccionId = `TEFMBCO${año}${mes}${dia}${hora}${minutos}11685${secuenciaAleatoria}`;

    // Verificar la longitud exacta de 29 caracteres
    console.log("Transacción generada:", transaccionId);
    if (transaccionId.length !== 29) {
        console.error("El ID de transacción generado no tiene 29 caracteres:", transaccionId);
    }

    // Formatear el monto
    const formattedMonto = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'CLP' }).format(monto).replace('CLP', '').trim();

    // Crear la URL para redirigir al comprobante
    const url = `comprobante.html?nombre=${encodeURIComponent(nombre)}&bancoDestino=${encodeURIComponent(bancoDestino)}&tipoCuenta=${encodeURIComponent(tipoCuenta)}&numeroCuenta=${encodeURIComponent(maskedNumeroCuenta)}&monto=${encodeURIComponent(formattedMonto)}&fecha=${encodeURIComponent(fecha)}&transaccionId=${encodeURIComponent(transaccionId)}`;
    window.location.href = url;
}