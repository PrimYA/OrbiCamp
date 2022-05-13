var jogador, vencedor = null;
var jogadorSelected = document.getElementById('joga-selected');
var vencedorSelected = document.getElementById('vencedor-selected');
var quadrados = document.getElementsByClassName('quadrado');

mudarjogador('X');

function escolherquad(id) {
    if(vencedor !== null) {
        return
    }
   
    var quadrado = document.getElementById(id);
    
    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = 'white';
    quadrado.style.textShadow = '2px 0 black'

    if(jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X'
    }

    mudarjogador(jogador);
    checkVencedor();
}

function mudarjogador(valor) {
    jogador = valor;
    jogadorSelected.innerHTML = jogador;
}

function checkVencedor() {
    var quad1 = document.getElementById('1');
    var quad2 = document.getElementById('2');
    var quad3 = document.getElementById('3');
    var quad4 = document.getElementById('4');
    var quad5 = document.getElementById('5');
    var quad6 = document.getElementById('6');
    var quad7 = document.getElementById('7');
    var quad8 = document.getElementById('8');
    var quad9 = document.getElementById('9');

    if(checkSequencia(quad1, quad2, quad3)) {
        mudaCorPadrao(quad1, quad2, quad3);
        mudarVencedor(quad1);
        return
    }
    if(checkSequencia(quad4, quad5, quad6)) {
        mudaCorPadrao(quad4, quad5, quad6);
        mudarVencedor(quad4);
        return
    }
    if(checkSequencia(quad7, quad8, quad9)) {
        mudaCorPadrao(quad7, quad8, quad9);
        mudarVencedor(quad7);
        return
    }
    if(checkSequencia(quad1, quad4, quad7)) {
        mudaCorPadrao(quad1, quad4, quad7);
        mudarVencedor(quad1);
        return
    }
    if(checkSequencia(quad2, quad5, quad8)) {
        mudaCorPadrao(quad2, quad5, quad8);
        mudarVencedor(quad2);
        return
    }
    if(checkSequencia(quad3, quad6, quad9)) {
        mudaCorPadrao(quad3, quad6, quad9);
        mudarVencedor(quad3);
        return
    }
    if(checkSequencia(quad1, quad5, quad9)) {
        mudaCorPadrao(quad1, quad5, quad9);
        mudarVencedor(quad1);
        return
    }
    if(checkSequencia(quad3, quad5, quad7)) {
        mudaCorPadrao(quad3, quad5, quad7);
        mudarVencedor(quad3);
        
    }

}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelected.innerHTML = vencedor;
}

function mudaCorPadrao(quad1, quad2, quad3) {
    quad1.style.background = '#0f0';
    quad2.style.background = '#0f0';
    quad3.style.background = '#0f0';

}

function checkSequencia(quad1, quad2, quad3) {
    var eIqual = false;

    if(quad1.innerHTML !== '-' && quad1.innerHTML === quad2.innerHTML && quad2.innerHTML === quad3.innerHTML) {
        eIqual = true;
    }

    return eIqual;
}

function reiniciar() {
    vencedor = null;
    vencedorSelected.innerHTML = '';

    for(var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i)
        quadrado.style.background = 'pink';
        quadrado.style.color = 'pink';
        quadrado.style.textShadow = '0 0 0'
        quadrado.innerHTML = '-'
    }
    
    mudarjogador('X');
}