/*$(document).ready(function () {
    var car_list=$(".carousel").find("li");
    var i=0;
    var show_carousel=$("#show_carousel");
    //show_carousel.hide();
    while(true){
        show_carousel.text(""+car_list[i].innerHTML);
        show_carousel.fadeIn("slow").fadeOut("slow");
        i+=1;
        if(i>=car_list.length) i=0;
    }
});*/

var run_carousel=function(){
        var car_list=$(".carousel").children("ul").children("li");
        var show_carousel=$("#show_carousel");
        show_carousel.text(""+car_list[i].innerHTML);
        show_carousel.fadeIn(4000).fadeOut(4000);
        i++;
        if(i>=car_list.length)i=0;
    }

$(document).ready(function () {
    i=0;
    var car_list=$(".carousel").find("li");
    var show_carousel=$("#show_carousel");
    setInterval(run_carousel,8000);
});

