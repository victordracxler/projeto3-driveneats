let selecoes = 0;
let comidaWpp = '';
let bebidaWpp = '';
let sobremesaWpp = '';
let totalWpp = '';

function selecionarPrato(prato) {
    const botaoSelecionado = document.querySelector('.comida .selecionado');

    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selecionado')
        selecoes--;
    }

    prato.classList.add('selecionado');
    selecoes++;

    ativarBotao();
}

function selecionarBebida(bebida) {
    const botaoSelecionado = document.querySelector('.bebida .selecionado');

    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selecionado')
        selecoes--;
    }

    bebida.classList.add('selecionado');
    selecoes++;

    ativarBotao();
}

function selecionarSobremesa(sobremesa) {
    const botaoSelecionado = document.querySelector('.sobremesa .selecionado');

    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove('selecionado')
        selecoes--;
    }

    sobremesa.classList.add('selecionado');
    selecoes++;

    ativarBotao();
}

function ativarBotao() {
    const elemento = document.querySelector('.botao-selecionar')
    const msgFechar = 'Fechar pedido';

    if (selecoes === 3) {
        elemento.disabled = false;
        elemento.classList.add('active')
        elemento.innerHTML = msgFechar;
    }
}

function confirmarPedido() {
    document.querySelector('.overlay').style.display = "block";
}

function cancelarPedido() {
    document.querySelector('.overlay').style.display = "none";
}

function telaConfirmacao() {

    //Comida

    const comida = document.querySelector('.comida .selecionado h3').innerHTML;
    const precoVirgula1 = document.querySelector('.comida .selecionado span').innerHTML;

    const nomezinho1 = document.querySelector('.conf-comida .nome-do-prato');
    nomezinho1.innerHTML = comida;

    const precinho1 = document.querySelector('.conf-comida .preco-do-prato');
    precinho1.innerHTML = precoVirgula1;

    //Bebida

    const bebida = document.querySelector('.bebida .selecionado h3').innerHTML;
    const precoVirgula2 = document.querySelector('.bebida .selecionado span').innerHTML;

    const nomezinho2 = document.querySelector('.conf-bebida .nome-do-prato');
    nomezinho2.innerHTML = bebida;

    const precinho2 = document.querySelector('.conf-bebida .preco-do-prato');
    precinho2.innerHTML = precoVirgula2;

    //sobremesa

    const sobremesa = document.querySelector('.sobremesa .selecionado h3').innerHTML;
    const precoVirgula3 = document.querySelector('.sobremesa .selecionado span').innerHTML;

    const nomezinho3 = document.querySelector('.conf-sobremesa .nome-do-prato');
    nomezinho3.innerHTML = sobremesa;

    const precinho3 = document.querySelector('.conf-sobremesa .preco-do-prato');
    precinho3.innerHTML = precoVirgula3;

    // Total

    const precoPonto1 = Number(precoVirgula1.replace(',', '.'));
    const precoPonto2 = Number(precoVirgula2.replace(',', '.'));
    const precoPonto3 = Number(precoVirgula3.replace(',', '.'));

    const totalPonto = precoPonto1 + precoPonto2 + precoPonto3;

    const totalVirgula = String(totalPonto.toFixed(2)).replace('.', ',');

    const totalzinho = document.querySelector('.preco-total');
    totalzinho.innerHTML = 'R$ ' + totalVirgula;

   
    comidaWpp = comida;
    bebidaWpp = bebida;
    sobremesaWpp = sobremesa;
    totalWpp = totalzinho.innerHTML = 'R$ ' + totalVirgula;


}

function whatsapp() {

    const nome = prompt('Qual ?? seu nome?');
    const endereco = prompt('Qual ?? o seu endere??o?');

    const mensagem = `Ol??, gostaria de fazer o pedido:
    - Prato: ${comidaWpp}
    - Bebida: ${bebidaWpp}
    - Sobremesa: ${sobremesaWpp}
    Total: ${totalWpp}
    
    Nome: ${nome}
    Endere??o: ${endereco}`;

    let encodada = encodeURIComponent(mensagem);

    console.log(mensagem)
    console.log(encodada);

    window.location.assign(`https://wa.me/5521976327295?text=${encodada}`);





}