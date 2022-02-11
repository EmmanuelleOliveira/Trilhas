$(document).ready (function() {
    $('#table-cep-info').hide()
    $('#btn').click(function(){
        const cep = $('#cep').val();
        const cepRule = /^[0-9]{8}$/;
        if(cepRule.test(cep)){
            $.ajax({
                url: `https://cep.awesomeapi.com.br/json/${cep}`
            }).done(function(data){
                $('#table-cep-info').show()
                $('#error').html(``)
                $('#table-body').html(``)
                $('#table-body').append(`<tr><td>${data.cep}</td><td>${data.address}</td><td>${data.district}</td><td>${data.city}</td><td>${data.state}</td><td>${data.ddd}</td><td>${data.lat}</td><td>${data.lng}</td></tr>`)
                $('#map').show()
                $('#map').html(`<iframe src="https://www.google.com/maps?api=1&q=${data.lat}%2C${data.lng}&hl=es;zoom=20&output=embed" width="750" height="400"></iframe>`)
            }).fail(function(){
                $('#table-cep-info').hide()
                $('#map').hide()
                $('#table-body').html(``)
                $('#error').html(`O CEP informado não existe`)
            })
        } else {
            $('#table-cep-info').hide()
            $('#map').hide()
            $('#error').html(``)
            $('#error').html(`Insira um número de 8 dígitos e sem caracteres especiais`)
        }
    });
});
