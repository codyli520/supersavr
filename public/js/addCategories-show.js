$( document ).ready(function() {  
   initializePage();
    var pageLoadTime = new Date();
    
    $('#groceryadd-btn').click(function(e){
        var curTime = new Date();
        var time = curTime - pageLoadTime;
        ga('send','timing','category', 'selected',time);
    });
});

function initializePage() {
 
}