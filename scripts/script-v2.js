function generarComprobante() {
    const nombre = document.getElementById('nombre').value;
    const bancoDestino = document.getElementById('bancoDestino').value;
    const tipoCuenta = document.getElementById('tipoCuenta').value;
    const numeroCuenta = document.getElementById('numeroCuenta').value;
    const monto = document.getElementById('monto').value;

    const maskedNumeroCuenta = tipoCuenta + ' ****' + numeroCuenta.slice(-4);
    
    // Generar fecha y hora
    const fechaObj = new Date();
    const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormato = fechaObj.toLocaleDateString('es-ES', opcionesFecha);
    const horaFormato = fechaObj.toLocaleTimeString('es-ES');
    const fecha = `${fechaFormato} ${horaFormato}`;

    // Obtener año, mes, día, hora y minutos en el formato correcto
    const año = String(fechaObj.getFullYear()).slice(2);
    const mes = String(fechaObj.getMonth() + 1).padStart(2, '0');
    const dia = String(fechaObj.getDate()).padStart(2, '0');
    const hora = String(fechaObj.getHours()).padStart(2, '0');
    const minutos = String(fechaObj.getMinutes()).padStart(2, '0');

    // Crear parte de la fecha y hora para el ID
    const fechaHoraParaId = año + mes + dia + hora + minutos;

    // Generar 8 números aleatorios
    const generarSecuenciaNumerica = (longitud) => {
        let secuencia = '';
        for (let i = 0; i < longitud; i++) {
            secuencia += Math.floor(Math.random() * 10);
        }
        return secuencia;
    };

    // Concatenar partes para formar el ID de transacción
    const secuenciaNumerica = '11685' + generarSecuenciaNumerica(8);
    const transaccionId = 'TEFMBCO' + fechaHoraParaId + secuenciaNumerica;

    // Formatear el monto
    const formattedMonto = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'CLP' }).format(monto).replace('CLP', '').trim();

    // Crear la URL para redirigir al comprobante
    const url = `comprobante.html?nombre=${encodeURIComponent(nombre)}&bancoDestino=${encodeURIComponent(bancoDestino)}&tipoCuenta=${encodeURIComponent(tipoCuenta)}&numeroCuenta=${encodeURIComponent(maskedNumeroCuenta)}&monto=${encodeURIComponent(formattedMonto)}&fecha=${encodeURIComponent(fecha)}&transaccionId=${encodeURIComponent(transaccionId)}`;
    window.location.href = url;
}