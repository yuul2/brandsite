$(function(){
    $('.text1')addClass('active');
    $(window).scroll(function(){
        var t = $(this).scroolTop();
        
        if(t<= $('.text2').offset().top-300){
            $('.text1').addClass('active');
        }
        else if(t <= $(".text3").offset().top-300){
			$(".text2").addClass("active");
		}
		else if(t <= $("body").offset().height()-300){
			$(".text3").addClass("active");
		}
    })
    $(window).trigger("scroll");
    
})