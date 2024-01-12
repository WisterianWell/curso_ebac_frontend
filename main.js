const form = document.getElementById('form-comparador');

function compararValores(valorA, valorB) {
    return valorB > valorA;
}

form.addEventListener('submit', function(e) {    
    e.preventDefault();

    const valorA = Number(document.getElementById('valor-a').value);
    const valorB = Number(document.getElementById('valor-b').value);

    const mensagemSucesso = `O valor <b>${valorB}<b> é maior que o valor <b>${valorA}<b>`;
    const mensagemErro = `O valor <b>${valorB}<b> é menor ou igual ao valor <b>${valorA}<b>`

    const containerSucesso = document.querySelector('.sucess-message');
    const containerErro = document.querySelector('.error-message');
    
    if (compararValores(valorA, valorB)) {
        containerSucesso.style.display = 'block';
        containerSucesso.innerHTML = mensagemSucesso;
        containerErro.style.display = '';

    } else {
        containerErro.style.display = 'block';
        containerErro.innerHTML = mensagemErro;
        containerSucesso.style.display = '';
    }
})

