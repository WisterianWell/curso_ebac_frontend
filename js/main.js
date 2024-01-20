$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
    })

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Insira o seu nome',
            email: 'Insira o seu E-mail',
            telefone: 'Insira o seu número',
            cpf: 'Insira o seu CPF',
            endereco: 'Insira o seu endereço',
            cep: 'Insira o seu CEP'
        },
    })
})