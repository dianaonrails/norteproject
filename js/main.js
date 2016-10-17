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

  $('.js-menu').click(function(e){

      $('.navbar-mobile').toggleClass( "active" );
      
      $('.navbar-mobile__nav-toggle-title').toggleClass("closed");
      $('.list-closed').toggle("slow");
  });

  

  $('.js-right').click(function(){
    
    var old = $('.testimonial.current');
    if(old.next('.testimonial').length > 0){
      old.next('.testimonial').addClass('current');
    }
    else{
      $('.testimonial:first').addClass('current');
    }
  
    old.removeClass('current');
  });
 

  $('.js-left').click(function(){
    
    var old = $('.testimonial.current');
    if(old.prev('.testimonial').length > 0){
      old.prev('.testimonial').addClass('current');
    }
    else{
      $('.testimonial:last').addClass('current');
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