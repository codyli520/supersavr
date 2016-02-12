//'use strict';

$( document ).ready(function() {  
   initializePage();
});

function initializePage() {
    $('#saving-btn').click(addSaving);

    //$('#colorBtn').click(randomizeColors);
}

function addSaving(e){
    e.preventDefault();
    var amount = isNaN(document.getElementById('inputAmount').value);

    $("#confirmAlert").addClass("hidden");
    $("#warningAlert").addClass("hidden");
    $("#successAlert").addClass("hidden");
    if(!amount){
        //alert('You have successfull added $'+document.getElementById('inputAmount').value+'.00');
        //$("#confirm").toggleClass('hidden');
        $("#confirmAlert").removeClass("hidden");
        $("#warningAlert").addClass("hidden");
        var realAmount = document.getElementById('inputAmount').value;


        $("#confirmAlert strong").append("<strong>"+realAmount+"</strong>");

    }
    else{
        //alert('PLEASE, enter a numerical value');
        //$('').show();
        $("#warningAlert").removeClass("hidden");
    }
}






