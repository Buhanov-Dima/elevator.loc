$( document ).ready(function() {

	$('.add_elevator').on('click', function(e){
		e.preventDefault();
		$('.wrap__elevator__form').addClass('active');
	});

	$('.add__elevator__popup').click(function(){
		$('.popup').fadeIn(400);
	});

	$('.add__elevator__item').click(function(){
		var elevatorsNum = $('.elevators__item').length + 1;
        $('<label for="subunit__'+ elevatorsNum +'"><span>Узел '+ elevatorsNum +' </span><input type="text" class="elevators__item" name="subunit" id="subunit__'+ elevatorsNum +'" placeholder="Введите название узла"/>').appendTo('.wrap__form__bg');
	});

	$('.wrap__elevator__info').click(function(){
		let findEl = $(this).children('.elevator__info');
		findEl.toggleClass('active');
	});
	
});