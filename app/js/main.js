var SliderWidget=(function(){

	var _insertValues=(function($this){
		var 
			containr = $this.closest('.seach-form__lyst'),
			from = containr.find('.seach-form__price-from'),
			to = containr.find('.seach-form__price-to');
		var values = $this.slider('option','values');

		from.val(values[0]);
		to.val(values[1]);
	}
	return{
		init: function(){

			$('.seach-form__slider-elem').each(function(){
				var 
					$this=$(this),
					min=parsenInt($this.data('min')),
					max=parsenInt($this.data('max'));

				$this.slider({
		      		range: true,
				    min: min,
				    max: max,
				    values: [min,max],
				    slide: function() {
			    	_insertValues($this);
			    	}
			       });

			});

			
		}
	}
}());

$(document).ready(function(){
	if ($('.seach-form__slider-elem').length){
		SliderWidget.init();
	}
});