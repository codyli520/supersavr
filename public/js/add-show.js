//'use strict';

$( document ).ready(function() {  
    $('.nav-header').html('<a class="navbar-brand"><button type="button" class="btn btn-default btn-sm" onclick="location.href=&quot;../index.html&quot;"> <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></button>&nbsp;Add Savings</a>');
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






