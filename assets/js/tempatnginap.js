(function($) {
	"use strict"
	
	$('.product-img img.thumbnail-img-product').on('click', function(){
		var type = $(this).data('type');
		var slug = $(this).data('slug');
		location.href = baseUrl + type + '/' + slug;
	})

})(jQuery);