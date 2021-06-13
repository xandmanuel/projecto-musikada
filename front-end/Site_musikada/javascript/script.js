
// somatorio do preço do ingresso

function precoTotal(){
    
    var qtd = Number (document.getElementById('qtdaingresso').value)
    // var preço = parseInt(document.getElementById('valor').innerHTML)
    qtd= qtd * 5000
    document.getElementById("valor").innerHTML = qtd

}

// slider 

$(document).ready(function(){
    $('#linha-evento-1').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function(){
            $('#linha-evento-1').removeClass('linha-evento-1');
        }
    });
});

$(document).ready(function(){
    $('#linha-evento-2').lightSlider({
        autoWidth:true,
        loop:false,
        onSliderLoad: function(){
            $('#linha-evento-2').removeClass('linha-evento-2');
        }
    });
});

