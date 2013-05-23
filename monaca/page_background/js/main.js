// This is a JavaScript file
$(function(){

    $('#backgroundSize').change(function(){
        var newVal = $('#backgroundSize').val();
        if(newVal === "200px400px"){
            newVal = ["200px", "400px"];
        }else if(newVal === "70%80%"){
            newVal = ["70%", "80%"];
        }else if(newVal === "300px30%"){
            newVal = ["300px", "30%"];
        }
        
        monaca.updateUIStyle('page', 'backgroundSize', newVal);
    });
    
     $('#backgroundColor').change(function(){
        var newVal = $('#backgroundColor').val();
        monaca.updateUIStyle('page', 'backgroundColor', newVal);
    });

    $('#backgroundImage').change(function(){
        var newVal = $('#backgroundImage').val();
        monaca.updateUIStyle('page', 'backgroundImage', newVal);
    });
    
    $('#backgroundRepeat').change(function(){
        var newVal = $('#backgroundRepeat').val();
        monaca.updateUIStyle('page', 'backgroundRepeat', newVal);
    });
    
    
    $('#backgroundPosition').change(function(){
        var newVal = $('#backgroundPosition').val();
         if(newVal === "center center")
         {
            newVal = ["center", "center"];
        }
        else if(newVal === "center top")
        {
            newVal = ["center", "top"];
        }
        else if(newVal === "center bottom")
        {
            newVal = ["center", "bottom"];
        }
        else if(newVal === "left top")
        {
            newVal = ["left", "top"];
        }
        else if(newVal === "left center")
        {
            newVal = ["left", "center"];
        }
        else if(newVal === "left bottom")
        {
            newVal = ["left", "bottom"];
        }
        else if(newVal === "right top")
        {
            newVal = ["right", "top"];
        }
        else if(newVal === "right center")
        {
            newVal = ["right", "center"];
        }
        else if(newVal === "right bottom")
        {
            newVal = ["right", "bottom"];
        }
        monaca.updateUIStyle('page', 'backgroundPosition', newVal);
    });
    
});

function retrieveStyle(){
    monaca.retrieveUIStyle("page", "backgroundColor", function(a){alert(a);});
}
