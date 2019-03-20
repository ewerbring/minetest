$(".flex-item").click(function(){
  $(".wedding, .para3").show();
  $(".wedding2, .para4,  .wedding3, .lang, .para5, .wedding4").hide();
});




$(".flex-item3").click(function(){
  $(".wedding3, .wedding4, .lang").show();
  $(".wedding, para3, .wedding2, .para4").hide();
});





function handle_mousedown(e){
    window.my_dragging = {};
    my_dragging.pageX0 = e.pageX;
    my_dragging.pageY0 = e.pageY;
    my_dragging.elem = this;
    my_dragging.offset0 = $(this).offset();
    function handle_dragging(e){
        var left = my_dragging.offset0.left + (e.pageX - my_dragging.pageX0);
        var top = my_dragging.offset0.top + (e.pageY - my_dragging.pageY0);
        $(my_dragging.elem)
        .offset({top: top, left: left});
    }
    function handle_mouseup(e){
        $('body')
        .off('mousemove', handle_dragging)
        .off('mouseup', handle_mouseup);
    }
    $('body')
    .on('mouseup', handle_mouseup)
    .on('mousemove', handle_dragging);
}
$('.scrollbox2').mousedown(handle_mousedown);
$('.scrollbox1').mousedown(handle_mousedown);
$('.scrollbox3').mousedown(handle_mousedown);
$('.scrollbox4').mousedown(handle_mousedown);


// $(document).ready(function (){
//            $(".flex-item, .flex-item3").click(function (){
//                $('.scrollbox2, .scrollbox3, .scrollbox4, scrollbox1').animate({
//                    scrollTop: $(".cosmosbox").offset().top
//                }, 500);
//            });
//        });
