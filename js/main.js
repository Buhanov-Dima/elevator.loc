$( document ).ready(function() {

	$('.add_elevator').on('click', function(e){
		e.preventDefault();
		$('.wrap__elevator__form').addClass('active');
	});

	$('.add__elevator__popup').click(function(){
		$('.popup').addClass('active');
	});

	$('.add__elevator__item').click(function(){
		var elevatorsNum = $('.elevators__item').length + 1;
        $('<label for="subunit__'+ elevatorsNum +'"><span>Узел '+ elevatorsNum +' </span><input type="text" class="elevators__item" name="subunit" id="subunit__'+ elevatorsNum +'" placeholder="Введите название узла"/>').appendTo('.wrap__form__bg');
	});

	$('.close__popup').click(function(){
		$('.popup').removeClass('active');
	});

	$('.sidebar').on( 'click', '.wrap__elevator__info', function() {
	    let findEl = $(this).children('.elevator__info');
		findEl.toggleClass('active');
	});

	$('.wrap__elevator__info').click(function(){
		$('.col-lg').removeClass('d-none');
	});

	$('.send__form').click(function(e){
		e.preventDefault();
		var nodeId = [];
		let i = 0;
		let elName = $('.elevators__item').val(); 
		let elNum = $('.elevators__item').length;
		for(i = 0; i < elNum; i++){
			nodeId[i] = $('.elevators__item:eq('+ i +')').val();
			console.log(nodeId[i]);
		}
		elName = $('#elevator__name').val();
		$('<div class="wrap__elevator__info"><a href="#" class="elevator__info__h">'+ elName +'<span>2 года</span></a><div class="elevator__info"></div></div>').insertAfter('.wrap__elevator__info:last');
		for (let r = 1; r <= i; r++) {
			console.log(nodeId[r]);
			$('<a href="#">Узел '+ r +' <span>2 года</span></a>').appendTo('.elevator__info:last');
		}
		if (elName.length > 3){
			let labelLength = $('.wrap__form__bg').find('label').length;
			console.log(labelLength);
			while (labelLength > 1){
				$('.wrap__form__bg label:eq('+ labelLength +')').remove();
				labelLength--;
			}
			$('.elevators__info__form').trigger('reset');
			$('.popup').removeClass('active');
		}		
	});
	
	
});