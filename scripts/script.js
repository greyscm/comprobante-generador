document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    document.getElementById('nombre').innerText = params.get('nombre');
    document.getElementById('numeroCuenta').innerText = params.get('numeroCuenta');
    document.getElementById('bancoDestino').innerText = params.get('bancoDestino');
    document.getElementById('monto').innerText = '$' + params.get('monto');
    document.getElementById('fechaHora').innerText = params.get('fecha');
    document.getElementById('transaccionId').innerText = params.get('transaccionId');
});

function openFullscreen() {
    const elem = document.querySelector('.transferencia-exitosa');
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    }
}

document.getElementById('compartirBtn').addEventListener('click', function() {
    html2canvas(document.getElementById('comprobante')).then(function(canvas) {
        canvas.toBlob(function(blob) {
            const file = new File([blob], "comprobante.png", { type: "image/png" });
            if (navigator.share) {
                navigator.share({
                    files: [file],
                    title: 'Comprobante de Transferencia',
                    text: 'Aquí está el comprobante de la transferencia',
                })
                .catch((error) => console.log('Error al compartir:', error));
            } else {
                alert('La funcionalidad de compartir no está soportada en este navegador.');
            }
        });
    });
});
