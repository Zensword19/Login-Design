var status= false;

$(document).ready(function(){
    $("#burgerIcon").click(function(){
        console.log(status);
            $(".csz-sidebar").addClass("hide");
            $("#burgerIcon").css("margin-left", "30px"); 
    });

    $("#closeButton").click(function(){
        $(".csz-sidebar").removeClass("hide");
    })
});