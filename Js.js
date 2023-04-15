'use strict '

const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*= tecla ]');
const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);


const atualizarDisplay = (texto) => {
    display.textContent += texto ;
}

numeros.forEach (
    numero => numero.addEventListener('click' , inserirNumero)
);


