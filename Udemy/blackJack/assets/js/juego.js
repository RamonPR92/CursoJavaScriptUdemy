/**
 * 2C Two of Clubs
 * 2D Two od diamonds
 * 2H Two of hearts
 * 2S Two of spades
 */
//Funcion anonima autoinvocada
const miModulo = (() => {
    'use strict'

    let deck = [];
    const types = ['C', 'D', 'H', 'S'];
    const especials = ['A', 'J', 'Q', 'K'];

    let jugadores = [];

    //referencias a html
    const btnPedirCarta = document.querySelector('#btnPedirCarta');
    const btnDetener = document.querySelector('#btnDetener');
    const btnNuevo = document.querySelector('#btnNuevo');
    const puntosJugadoresHtml = document.querySelectorAll('small');
    const jugadorCartas = document.querySelectorAll('.divCartas');
    

    const inicializarJuego = (numeroJugadores = 1) =>{
         deck = createDeck();
         jugadores = [];
        for(let i = 0; i < numeroJugadores; i++){
            jugadores.push(0);
        }

        btnPedirCarta.disabled = false;
        btnDetener.disabled = false;
        
        puntosJugadoresHtml.forEach(element => {
            element.innerText = 0;
        });

        jugadorCartas.forEach(element => {
            element.innerHTML = '';
        });
    }

    //Esta funcion crea un deck ordenado aleatoriamente
    const createDeck = () => {
        deck = [];
        for (let i = 2; i <= 10; i++) {
            for (const type of types) {
                deck.push(i + type);
            }
        }

        for (const especial of especials) {
            for (const type of types) {
                deck.push(especial + type);
            }
        }
        return _.shuffle(deck);

    }

    //Retorna y remueve la ultima carta
    const pedirCarta = () => {
        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }

        return deck.pop();
    }

    //Consigue el valor de la carta tomando e primer caracter
    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        let puntos = 0;

        return (isNaN(valor)) ? valor === 'A' ? 11 : 10
            : valor * 1;
    }

    const acumularPuntos = (carta, turno) => {
        jugadores[turno] = jugadores[turno] + valorCarta(carta);
        puntosJugadoresHtml[turno].innerText = jugadores[turno];
        return jugadores[turno];
    }

    const turnoComputadora = (puntosJugador) => {
        let puntosComputadora = 0;
        do {
            let carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, jugadores.length - 1);
            addImgCarta(carta, jugadores.length -1);

        } while ((puntosComputadora < puntosJugador) && (puntosJugador < 21));

        determinarJugador(puntosJugador, puntosComputadora);
    };

    const addImgCarta = (carta, turno) =>{
        let imgCarta = document.createElement('img');
        imgCarta.src = `assets/img/${carta}.png`;
        imgCarta.classList.add('carta');
        jugadorCartas[turno].append(imgCarta);
    }

    const determinarJugador = (puntosJugador, puntosComputadora) =>{
        setTimeout(() => {
            if (puntosComputadora == puntosJugador) {
                alert('Nadie gana');
            } else if (puntosJugador > 21) {
                alert('Gano la computadora');
            } else if (puntosComputadora > 21) {
                alert('Gano el jugador');
            }
        }, 10);
    }

    //Eventos
    btnPedirCarta.addEventListener('click', () => {

        let carta = pedirCarta();
        let puntosJugador = acumularPuntos(carta, 0);

            addImgCarta(carta, 0);        

        if (puntosJugador > 21) {
            btnPedirCarta.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
        if (puntosJugador == 21) {
            btnPedirCarta.disabled = true;
            btnDetener.disabled = true;

            setTimeout(() => {
                alert('Gano el Jugador');
            }, 10);
        }
    });

    btnDetener.addEventListener('click', () => {
        btnPedirCarta.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(jugadores[0]);
    });

    btnNuevo.addEventListener('click', () => {
        inicializarJuego(2);
    });

    inicializarJuego(2);

    return {
         start: inicializarJuego
    };
    //TODO:
    //FIXME:
})();

