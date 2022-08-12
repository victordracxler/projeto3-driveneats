let selecoes = 0

function selecionarPrato(prato){
    const botaoSelecionado = document.querySelector('.comida .selecionado');

    if (botaoSelecionado !== null){
        botaoSelecionado.classList.remove('selecionado')
        selecoes--;
    }

    const seletor = '.' + prato;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');
    selecoes++;

    ativarBotao();
}

function selecionarBebida(bebida){
    const botaoSelecionado = document.querySelector('.bebida .selecionado');

    if (botaoSelecionado !== null){
        botaoSelecionado.classList.remove('selecionado')
        selecoes--;
    }

    const seletor = '.' + bebida;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');
    selecoes++;

    ativarBotao();
}

function selecionarSobremesa(sobremesa){
    const botaoSelecionado = document.querySelector('.sobremesa .selecionado');

    if (botaoSelecionado !== null){
        botaoSelecionado.classList.remove('selecionado')
        selecoes--;
    }

    const seletor = '.' + sobremesa;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');
    selecoes++;

    ativarBotao();
}

function ativarBotao(){
    const elemento = document.querySelector('.botao-selecionar')
    const msgFechar = 'Fechar pedido';

    if (selecoes === 3){
       elemento.disabled = false;
       elemento.classList.add('active')
       elemento.innerHTML = msgFechar;
    }
}