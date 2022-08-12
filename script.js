function selecionarPrato(prato){
    const botaoSelecionado = document.querySelector('.comida .selecionado');

    if (botaoSelecionado !== null){
        botaoSelecionado.classList.remove('selecionado')
    }

    const seletor = '.' + prato;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');


}

function selecionarBebida(bebida){
    const botaoSelecionado = document.querySelector('.bebida .selecionado');

    if (botaoSelecionado !== null){
        botaoSelecionado.classList.remove('selecionado')
    }

    const seletor = '.' + bebida;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');


}

function selecionarSobremesa(sobremesa){
    const botaoSelecionado = document.querySelector('.sobremesa .selecionado');

    if (botaoSelecionado !== null){
        botaoSelecionado.classList.remove('selecionado')
    }

    const seletor = '.' + sobremesa;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');


}