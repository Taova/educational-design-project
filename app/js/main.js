var SliderWidget=(function(){

	var _insertValues=(function($this){
		var 
			containr = $this.closest('.seach-form__lyst'),
			from = containr.find('.seach-form__price-from'),
			to = containr.find('.seach-form__price-to');
		var values = $this.slider('option','values');

		from.val(values[0]);
		to.val(values[1]);
	
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
			    	},
			    	create: function(){
			    		_insertValues($this);
			    	}
			       });

			});

			
		}
	}
	
}());


var RatingWidget = (function(){

	var _letTheStars = function(ratingAmount){
		var 
			starsArray=[];
	};

	return{
		init:function(){
			$('.products__rating').each(function(){
				console.log($(this).data('rating'));
			});
		}
	}
}());

$(document).ready(function(){

	if ($('.products__rating').length){
		RatingWidget.init();
	}

	if ($('.seach-form__slider-elem').length){
		SliderWidget.init();
	}
});