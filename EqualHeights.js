(equalHeights = function() {	
	if ($('[data-equal-heights]').length) {
		$('[data-equal-heights]').parent().each(function(){
			var element_height = 0;
			$(this).find('[data-equal-heights]').each(function(){
				$(this).removeAttr('style');
				if ($(this).outerHeight() > element_height) {
					element_height = $(this).outerHeight();
				} 
			});
			$(this).find('[data-equal-heights]').css('min-height',element_height + 'px');
		});
	}
})();
