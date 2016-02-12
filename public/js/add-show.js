//'use strict';

$( document ).ready(function() {  
   
});

function addSaving(){
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
        $(realAmount).text();

    }
    else{
        //alert('PLEASE, enter a numerical value');
        //$('').show();
        $("#warningAlert").removeClass("hidden");
    }
}






