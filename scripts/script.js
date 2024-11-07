function generarComprobante() {
    const nombre = document.getElementById('nombre').value;
    const bancoDestino = document.getElementById('bancoDestino').value;
    const tipoCuenta = document.getElementById('tipoCuenta').value;
    const numeroCuenta = document.getElementById('numeroCuenta').value;
    const monto = document.getElementById('monto').value;

    const maskedNumeroCuenta = tipoCuenta + ' ****' + numeroCuenta.slice(-4);

    // Generar fecha y hora en el formato deseado
    const fechaObj = new Date();
    const dia = String(fechaObj.getDate()).padStart(2, '0'); // Día con dos dígitos
    const mes = fechaObj.toLocaleString('es-ES', { month: 'long' }); // Mes en texto
    const año = fechaObj.getFullYear();
    const hora = String(fechaObj.getHours()).padStart(2, '0'); // Formato 24 horas
    const minutos = String(fechaObj.getMinutes()).padStart(2, '0');

    const fecha = `${dia} de ${mes} del ${año} ${hora}:${minutos} hrs.`;

    // Formatear ID de transacción
    const añoTransaccion = String(fechaObj.getFullYear()).slice(-2);
    const mesTransaccion = String(fechaObj.getMonth() + 1).padStart(2, '0');
    const diaTransaccion = String(fechaObj.getDate()).padStart(2, '0');
    const horaTransaccion = String(fechaObj.getHours()).padStart(2, '0');
    const minutosTransaccion = String(fechaObj.getMinutes()).padStart(2, '0');

    // Generar 7 números aleatorios para el ID
    const generarSecuenciaNumerica = (longitud) => {
        let secuencia = '';
        for (let i = 0; i < longitud; i++) {
            secuencia += Math.floor(Math.random() * 10);
        }
        return secuencia;
    };
    
    const secuenciaAleatoria = generarSecuenciaNumerica(7);

    // Componer el transaccionId en el formato deseado
    const transaccionId = `TEFMBCO${añoTransaccion}${mesTransaccion}${diaTransaccion}${horaTransaccion}${minutosTransaccion}11685${secuenciaAleatoria}`;

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