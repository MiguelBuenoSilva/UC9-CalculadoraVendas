function calcularValor() {

    //Obtendo os dados
    let valorDaCompra = document
        .getElementById('txtValorCompra').value;

    let formaPagamento = document
        .getElementById('cbFormaPagamento').value;

    //Calcular o valor da compra 
    //considerando descontos e frete
    let desconto = 0;
    let frete = 0;

    //Calcular o valor do desconto
    if (formaPagamento == 'pix') {
        desconto = valorDaCompra * 5 / 100;
    }

    //Calcular o frete após o desconto
    if (valorDaCompra <= 200) {
        frete = valorDaCompra * 10 / 100;
    }

    let valorAPagar = valorDaCompra - desconto + frete;


    //Mostrar o valor a pagar para o usuário

    let divresultado = document.getElementById('resultado');

    //Colocar o valor a pagar na divresultado

    divresultado.innerHTML = `
            <h1>Resultado<h1/>
            <hr>
            <h3>Valor total: ${valorDaCompra}<h3>
            <h3>Valor frete: ${frete.toFixed(2)}<h3>    
            <h3>Valor desconto: ${desconto.toFixed(2)}<h3>
            <hr>
            <h3>Valor total: ${valorAPagar.toFixed(2)}<h3>    
            
            ` ;
}
