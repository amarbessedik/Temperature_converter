
$(function () {
    $("[name = selection]").click(function () {
        $('.desc').hide();
        $("#w-" + $(this).val()).show('slow');
    });
});

var inputs = ['celInput', 'kelInput', 'fahInput'];
var exec = ['cel', 'kel', 'fah']
var n = 3;

    for(var i = 0 ; i < n ; i++)
    {
         if(document.getElementById(inputs[i]))
           converter(exec[i]);
    }

//================================ Function Converter =================================
//=====================================================================================
function converter(temperature) {
    //If user enters temperature (either in celsius, fahrenheit, or kelvin)
    if (temperature === 'cel') 
    {
        document.getElementById('celInput').addEventListener('input', function (e) 
        {
            let cel = parseFloat(e.target.value); 

                document.getElementById('kelOutput-1').innerHTML = (cel + 273.0).toFixed(2);
                document.getElementById('fahOutput-1').innerHTML = (((9.0/5.0) * cel) + 32).toFixed(2);
                color_transition();
            
        });
    } else if (temperature === 'kel') 
    {
        document.getElementById('kelInput').addEventListener('input', function (e) 
        {
            let kel = parseFloat(e.target.value);

                document.getElementById('celOutput-3').innerHTML = (kel - 273.0).toFixed(2);
                document.getElementById('fahOutput-3').innerHTML = ((9.0/5.0) * (kel - 273) + 32).toFixed(2);
                color_transition();

        });
    } else if (temperature === 'fah') 
    {
        document.getElementById('fahInput').addEventListener('input', function (e) 
        {
            let fah = parseFloat(e.target.value);
  
                document.getElementById('celOutput-2').innerHTML = ((5.0/9.0) * (fah - 32)).toFixed(2);
                document.getElementById('kelOutput-2').innerHTML = (((fah - 32) * (5.0/9.0)) + 273.15).toFixed(2);
                color_transition();  
        });
    }
}//end converter()


function color_transition()
{
    $("#app-container").css({
        transition : 'background-color 1500ms ease-in-out',
        "background-color": "rgba(5, 68, 107, 0.6)"
    });

    $('#side-note').css({
        transition: 'background-color 1500ms ease-in-out',
        "background-color": "rgba(0,0,0, 0.6)",
        "color": "#fff"
    });
}
