// Escribe un programa que le muestre un recordatorio al usuario cada 10 segundos.
// Mientras el usuario pulse Aceptar, el recordatiorio continuará. Cuando el usuario pulse Candelar, el recordatiorio se anulará.
var intervalo

window.onload = () => {
    intervalo = setInterval(() =>{
        if (!confirm("Recordotario")) {
            clearInterval(intervalo)
        }
    }, 10000)
}
