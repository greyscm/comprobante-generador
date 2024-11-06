function generarComprobante() {
    // Obtener los valores de año, mes, día, hora y minutos
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
}