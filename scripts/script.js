function generarComprobante() {
    const nombre = document.getElementById('nombre').value;
    const bancoDestino = document.getElementById('bancoDestino').value;
    const tipoCuenta = document.getElementById('tipoCuenta').value;
    const numeroCuenta = document.getElementById('numeroCuenta').value;
    const monto = document.getElementById('monto').value;

    const maskedNumeroCuenta = tipoCuenta + ' ****' + numeroCuenta.slice(-4);
<<<<<<< HEAD
    const fecha = new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    const transaccionId = 'TEFMBCO24' + Math.random().toString(36).substr(2, 10).toUpperCase();
=======
    
    // Generar fecha y hora sin coma
    const fechaObj = new Date();
    const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormato = fechaObj.toLocaleDateString('es-ES', opcionesFecha);
    const horaFormato = fechaObj.toLocaleTimeString('es-ES');
    const fecha = `${fechaFormato} ${horaFormato}`;

    // Formatear ID de transacción
    const año = String(fechaObj.getFullYear()).slice(2);
    const mes = String(fechaObj.getMonth() + 1).padStart(2, '0');
    const día = String(fechaObj.getDate()).padStart(2, '0');
    const fechaParaId = año + mes + día;

    const generarSecuenciaNumerica = (longitud) => {
        let secuencia = '';
        for (let i = 0; i < longitud; i++) {
            secuencia += Math.floor(Math.random() * 10);
        }
        return secuencia;
    };

    const secuenciaNumerica = generarSecuenciaNumerica(16);
    const transaccionId = 'TEFMBCO' + fechaParaId + secuenciaNumerica;
>>>>>>> master

    const formattedMonto = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'CLP' }).format(monto).replace('CLP', '').trim();

    const url = `comprobante.html?nombre=${encodeURIComponent(nombre)}&bancoDestino=${encodeURIComponent(bancoDestino)}&tipoCuenta=${encodeURIComponent(tipoCuenta)}&numeroCuenta=${encodeURIComponent(maskedNumeroCuenta)}&monto=${encodeURIComponent(formattedMonto)}&fecha=${encodeURIComponent(fecha)}&transaccionId=${encodeURIComponent(transaccionId)}`;
    window.location.href = url;
}

function copiarDatos() {
    const nombre = document.getElementById('nombre').value;
    const bancoDestino = document.getElementById('bancoDestino').value;
    const tipoCuenta = document.getElementById('tipoCuenta').value;
    const numeroCuenta = document.getElementById('numeroCuenta').value;

    const datos = `Nombre: ${nombre}\nBanco destino: ${bancoDestino}\nTipo de cuenta: ${tipoCuenta}\nN° de cuenta: ${numeroCuenta}`;
    navigator.clipboard.writeText(datos).then(() => {
        alert('Datos copiados al portapapeles');
    }, (err) => {
        console.error('Error al copiar al portapapeles: ', err);
    });
}
