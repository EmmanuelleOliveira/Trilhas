$(document).ready (function(){
    $.ajax({
        url: "https://economia.awesomeapi.com.br/json/all",
    }).done(function(data){
        Object.entries(data).forEach(function(moeda){
            $("#coin").append(`<option>${moeda[0]}</option>`); 
        })
    })
    $("#coin").on("change", function(){
        const coinSelected = $("#coin").val();
        $.ajax ({
            url: `http://economia.awesomeapi.com.br/json/${coinSelected}-BRL`
        }).done(function(data){
            const obj = Object.values(data)[0];
            $("#coin-info").html(`Conversão realizada: ${obj.code}/${obj.codein} </br> Data e hora: ${obj.create_date}</br> Valor mínimo: R$ ${obj.low} </br> Valor máximo: R$ ${obj.high} </br> Valor de compra: R$ ${obj.bid}</br> Valor de venda: R$ ${obj.ask}`) 
        })
    })
    $("#btn-search").on("click", function(){
        $("#results-search").html = ("");
        const initialDate = $("#initial-date").val().replaceAll("-","");
        const finalDate = $("#final-date").val().replaceAll("-","");
        const coinSelected = $("#coin").val();
        $.ajax({
            url:`https://economia.awesomeapi.com.br/${coinSelected}-BRL/${10**20}?start_date=${initialDate}&end_date=${finalDate}`
        }).done(function (data){
            data.forEach(function(coinObj){
                const timestamp = new Date (coinObj.timestamp*1000).toString();
                $("#body-results").append(`<tr><td>${coinSelected}</td><td>${coinObj.high}</td><td>${coinObj.low}</td><td>${coinObj.bid}</td><td>${coinObj.ask}</td><td>${coinObj.varBid}</td><td>${coinObj.pctChange}</td><td>${timestamp}</td></tr>`)
            })
        })
    })
})