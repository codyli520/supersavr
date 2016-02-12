
$( document ).ready(function() {  
   initializePage();
});

function initializePage() {

}

function addSaving(){
   
    var amount = isNaN(document.getElementById('inputAmount').value);
    
    //$("#confirmAlert").addClass("hidden");
    //$("#warningAlert").addClass("hidden");
    //$("#successAlert").addClass("hidden");
    if(!amount){
        //alert("clicked");
        //alert('You have successfull added $'+document.getElementById('inputAmount').value+'.00');
        $("#confirmAlert").toggleClass('hidden');
        //$("#confirmAlert").removeClass("hidden");
        //$("#warningAlert").addClass("hidden");
        var realAmount = document.getElementById('inputAmount').value;


        $("#confirmAlert strong").html("<strong>Confirm amount: $"+realAmount+".00</strong>");
        

    }
    else{
        //alert('PLEASE, enter a numerical value');
        //$('').show();
        $("#warningAlert").toggleClass("hidden");
    }
}

function submit(name){
    $("#confirmAlert").toggleClass('hidden');
    /*var data = require("../../data.json");
    var jsonData = JSON.parse(user);
    alert(jsonData);
    $.getJSON("data.json", function(data){
        for (var i = 0; i < data["user"].length; i++) {
            if(data["user"][i].username === name){
                var temp = parseInt(data["user"][i].saving);
                data["user"][i].saving = temp - $("#inputAmount").val();
            }
        }
    });*/
    
    $("#inputAmount").val("");
}





