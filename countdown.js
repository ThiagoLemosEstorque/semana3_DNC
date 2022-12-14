const dia = document.getElementById('dia');
const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');

function countDown() {
    const dtLancamento = new Date('01 jan 2023');
    const hj = new Date();

    const segTotal = (dtLancamento - hj)/1000;

    const finalDia = Math.floor(segTotal / 60 / 60 / 24);
    const finalHora = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinuto = Math.floor(segTotal / 60) % 60;
    const finalSegundo = Math.floor(segTotal) % 60;

    dia.innerHTML = formatoTempo(finalDia);
    hora.innerHTML = formatoTempo(finalHora);
    minuto.innerHTML = formatoTempo(finalMinuto);
    segundo.innerHTML = formatoTempo(finalSegundo);
}

function formatoTempo(tempo){
    return tempo < 10 ? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000);