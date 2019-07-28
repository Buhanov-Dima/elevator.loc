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

	$('#monitor').click(function(){
		$('.monitoring').removeClass('d-none');
	});

/*
	$.getJSON("http://95.213.193.6:9777/api/predictions/1/102", function( data ) {
	    console.log(data);

	   	var ctx = document.getElementById('myChart');
		var myChart = new Chart(ctx, {
			type: 'line',
			data: data,
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero: false
		                }
		            }]
		        }
		    }
		});




		var data = {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
			datasets: [{
				label: "Dataset",
				backgroundColor: "rgba(255,99,132,0.2)",
				borderColor: "rgba(255,99,132,1)",
				hoverBackgroundColor: "rgba(255,99,132,0.4)",
				hoverBorderColor: "rgba(255,99,132,1)",
				borderWidth: 2,
				data: [65, 59, 20, 81, 56, 55, 40],
			}]
		};
	});

*/

$.getJSON("http://95.213.193.6:9777/api/predictions/1/102", function (cdata) {

		console.log(cdata);

		var labeldata = [];

		var chrtdata = [];

		for(var i =0; i < cdata.length; i++)
		{
			labeldata[i] = cdata[i]["rul"];
			chrtdata[i] = cdata[i]["timestamp"];
//		  labeldata.push(cdata[i].["timecycle"]])
		}
		
		console.log(chrtdata);
		console.log(labeldata);

		var ctx = document.getElementById("myChart").getContext("2d");

		var myChart = new Chart(ctx, {
		  type: 'line',
		  data: {
	        labels: chrtdata,
	        datasets: [{
	            label: '# Остаточный срок службы',
	            data: labeldata,
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)',
	                'rgba(75, 192, 192, 0.2)',
	                'rgba(153, 102, 255, 0.2)',
	                'rgba(255, 159, 64, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255, 99, 132, 1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)',
	                'rgba(75, 192, 192, 1)',
	                'rgba(153, 102, 255, 1)',
	                'rgba(255, 159, 64, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },

		});

		

	});

});

/*		for(var item in result){
              labels.push(result[item].slice(0,1).toString());
              data.push(result[item].slice(1,2).toString());
          }

	    var tempData = {
	        labels : labels,
	        datasets : [{
	            fillColor : "rgba(172,194,132,0.4)",
	            strokeColor : "#ACC26D",
	            pointColor : "#fff",
	            pointStrokeColor : "#9DB86D",
	            data : data
	        }]
	    };
    	var temp = document.getElementById('compradores').getContext('2d');
    	var lineChart = new Chart(temp).Line(tempData);
*/


/*	fetch("http://95.213.193.6:9777/predictions/1")
  		.then(resp => resp.json())
  		.then(data => console.log(data)
*/	
	
