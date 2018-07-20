$(document).ready(function(){
    $("#small img").hover(function(){
		var imagen=$(this).attr("src");
		$("#big img").attr("src",imagen);
	});
})