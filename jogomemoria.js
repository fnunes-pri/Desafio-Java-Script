const cartas = document.querySelectorAll('.cartas');
let primeiraCarta = null
let segundaCarta = null

function mudacarta() {
  this.classList.add('muda')
  if(primeiraCarta == null) {
    primeiraCarta = this
  } else {
    segundaCarta = this
    comparaCarta();
  }
}

function ResetarCartas(){
  primeiraCarta = null
  segundaCarta = null
 }

function desvirar() {
  setTimeout(() => {
    primeiraCarta.classList.remove('muda')
    segundaCarta.classList.remove('muda')
    ResetarCartas();
  }, 1000)
}

function resetarCartas(){
 primeiraCarta = null
 segundaCarta = null
}



function desabilitarCarta() {
  primeiraCarta.removeEventListener('click',mudacarta)
  segundaCarta.removeEventListener('click' ,mudacarta)
  resetarCartas();
}
function comparaCarta() {
  if(primeiraCarta.dataset.card === segundaCarta.dataset.card) {
    desabilitarCarta();
   return
  }
  desvirar()
}
(function shuffle() {
  cartas.forEach((carta) => {
      let ramdomPosition = Math.floor(Math.random() * 12);
      carta.style.order = ramdomPosition;
  })
})();

cartas.forEach(carta => {
  carta.addEventListener('click', mudacarta)
})





