$(function() {

   $(window).scroll(function() {

       var scroll = $(window).scrollTop()

       if (scroll > 969) {
           $('#nav-bar').css('background', '#efb601')
        }
       if (scroll < 969) {
            $('#nav-bar').css('background', 'transparent')
        }
   
    })
})


// $(document).ready(function(){
//   $(window).scroll(function(){
//   	var scroll = $(window).scrollTop();
// 	  if (scroll > 900) {
// 	    $("#nav-bar").css("background" , "#fff");
// 	  }

// 	  else{
// 		  $(".black").css("background" , "#fff");  	
// 	  }
//   })
// })
