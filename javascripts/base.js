
init_step_2 = function(){
	var $text = $('#main .text.sharp'),
	  $blur = $('#main .text.blur'),
	  $text2 = $('#main .text2.sharp'),
	  $blur2= $('#main .text2.blur');

	$blur.fadeIn(300,function(){
		$text.fadeIn(200,function(){
			$blur.fadeOut(300,function(){
				$blur2.fadeIn(300,function(){
					$text2.fadeIn(200,function(){
						$blur2.fadeOut(300,function(){

						});
					});
				});
			});
		});
	});
}

scrolled_to = function($el){
	if (typeof $el !== 'object') {
		return false;
	}
	var height = $(document).height(),
	  position = $el.offset();
	  if (position.top < height) {
	  	return true;
	  }
	return false;
}

set_remove_class = function($el,cl){
	if ($el.hasClass(cl)) {
		// do nothing
	} else {
		$el.addClass(cl);
	}

}

main_scroll = function(){
	if (scrolled_to($('#main + li'))) {
		set_remove_class($('#page'),'main-fixed');
	} else {
		$('#page').removeClass('main-fixed');
	}
}

tech_scroll = function(){
	if (scrolled_to($('#tech .tech-trigger'))) {
		set_remove_class($('#page'),'tech-fixed');
	} else {
		$('#page').removeClass('tech-fixed');
	}
}

$(document).ready(function(){
	var $page = $('#page');	

	$page.scroll(function() {

	  // header
	  if ($page.scrollTop() > 98 ) {
	  	set_remove_class($page,'header-fixed');
	  } else {
	  	$page.removeClass('header-fixed');
	  }

	  main_scroll();
	  tech_scroll();

	});

	// make it activate on a scoll position once?
	$('#main div.image').fadeTo(1500,1,init_step_2);


});

