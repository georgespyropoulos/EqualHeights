$(function(){
	(equalHeights = function() {	
		if ($('div[data-equal-heights]').length) {
			$('div[data-equal-heights]').parent().each(function(){
				var element_height = 0;
				$(this).find('div[data-equal-heights]').each(function(){
					$(this).removeAttr('style');
					if ($(this).outerHeight() > element_height) {
						element_height = $(this).outerHeight();
					} 
				});
				$(this).find('div[data-equal-heights]').css('min-height',element_height + 'px');
			});
		}
	})();
});
