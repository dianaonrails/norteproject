function roll(){
    var curr = 2;
    var count = 4;
    $('#testimonials .testimonial:nth-child(1)').show("slide", { direction: "left" }, 500);
    setInterval(function(){
        //console.log('C:'+curr);
        $('#testimonials .testimonial').hide("slide", { direction: "right" }, 500);
        $('#testimonials .testimonial:nth-child('+curr+')').delay(750).show("slide", { direction: "left" }, 500);
        curr++;
        if(curr == count+1){
            // 5000 - 500 - 750 - 500 = 3250    =>    delay = 3000
            $('#testimonials .testimonial:nth-child(4)').delay(3000).hide("slide", { direction: "right" }, 500);
            curr = 1;
        }
    }, 5000);
  }

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}  

$(document).ready(function() {
  var size_li = $(".projects__list").length;
  var x=6;

  $('.projects .projects__list:lt('+x+')').show();

  $('.js-menu').click(function(e){

      $('.navbar-mobile').toggleClass( "active" );
      
      $('.navbar-mobile__nav-toggle-title').toggleClass("closed");
      $('.list-closed').toggle("slow");
  });
  
  $('.js-more').click(function(){
    x = (x+6 <= size_li) ? x+6 : size_li;
    $('.projects .projects__list:lt('+x+')').show();
    $('.projects .projects__list:lt('+x+')').parent().css('margin-bottom','20px');
    if( x == size_li){
      $(this).hide();
    }
  });

  $('.js-testimonial').click(function(){
     
     $('.circle').removeClass('active');
     $('.section-testimonials__text').removeClass('current');

     $(this).addClass('active');
     var id = $(this).attr('id');

     switch(id){
      case 'first':
        $('.section-testimonials__text:first').addClass('current');
        break;
      case 'second':
        $('.section-testimonials__text:nth-child(3)').addClass('current');
        break; 
      case 'third':
        $('.section-testimonials__text:nth-child(4)').addClass('current');
        break;    
      default:
        break;  
     }
    
  });
 

  $('.js-left').click(function(){
    
    var old = $('.testimonial.current');
    if(old.prev('.section-testimonials__text').length > 0){
      old.prev('.section-testimonials__text').addClass('current');
    }
    else{
      $('.section-testimonials__text:last').addClass('current');
    }
    

    old.removeClass('current');


  });

  $('.js-search').click(function(){
    $('.nav__search').css('border-color','white');
    $('.nav__search').css('width','140px');
  });

  $('.js-contact').blur(function(){
    $(this).parent().find('.warning').remove();
    if ($(this).attr('name') == 'email' && !validateEmail($(this).val())){
      $('<div class="warning">Email inválido.</div>').insertAfter($(this));
      
    }
    else if($(this).val() == ''){
      $('<div class="warning">Por favor preencha o campo.</div>').insertAfter($(this));
    }
    else{
      $(this).find('.warning').remove();
    }
  });
});