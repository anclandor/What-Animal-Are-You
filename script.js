$("button").click(function() {
    let height = $(".height").val();
    let temperment = $(".temperment").val();
    
    if (height >= 9 || height <= 0) {
	alert("for real!!!");
    }
    else if (temperment !== "excitable" && temperment !== "tranquil") {
	alert("please enter a valid temperment");
    }
    else if (height < 5 && temperment === "excitable") {
        $(".hippo, .cow, .turtle").hide();
        $(".cat").css("width" , "800px");
        $(".cat").css("font-size" , "300px");
        $(".cat").css("display" , "flex"); 
        $(".cat").css("justify-content" , "center");
     }
    else if (height < 5 && temperment === "tranquil") {
        $(".hippo, .cow, .cat").hide();
        $(".turtle").css("width" , "800px");
        $(".turtle").css("font-size" , "300px");
        $(".turtle").css("display" , "flex"); 
        $(".turtle").css("justify-content" , "center");     
     }       
    else if (height >= 5 && temperment === "tranquil") {
        $(".hippo, .turtle, .cat").hide();
        $(".cow").css("width" , "800px");
        $(".cow").css("font-size" , "300px");
        $(".cow").css("display" , "flex"); 
        $(".cow").css("justify-content" , "center");     
     }       
     else if (height >= 5 && temperment === "excitable") {
        $(".cow, .turtle, .cat").hide();
        $(".hippo").css("width" , "800px");
        $(".hippo").css("font-size" , "300px");
        $(".hippo").css("display" , "flex"); 
        $(".hippo").css("justify-content" , "center");     
     }
});
