$(document).ready(function() {
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    $('#telefone').mask('(00) 00000-0000');

    $('#cadastro-form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            telefone: {
                required: true,
                minlength: 15 // Tamanho com a máscara '(00) 00000-0000'
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            nome: {
                required: 'Por favor, informe o nome completo.',
                minlength: 'O nome deve ter pelo menos 3 caracteres.'
            },
            telefone: {
                required: 'Por favor, informe um telefone válido.',
                minlength: 'Informe um telefone válido (xx) xxxxx-xxxx'
            },
            email: {
                required: 'Por favor, informe um endereço de e-mail válido.',
                email: 'Por favor, informe um endereço de e-mail válido.'
            }
        }
    });
});
