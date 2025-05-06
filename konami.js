$(document).ready(function(){
	var keys 	= [];
	var konami  = '38,38,40,40,37,39,37,39,66,65';
	
	$(document).keydown(function(e) {
				keys.push( e.keyCode );
				if ( keys.toString().indexOf( konami ) >= 0 ){
					$('div.raptor').show();
					$('div.raptor').animate({height: '400px', width: '360px'}, 0);
					$('div.raptor').animate({top:'-=100'}, 2000);
					keys = [];
				}
			}
		);
	$('div.raptor').click(function(){
		$('div.raptor').animate({top:'-200px'},0);
		$('div.raptor').hide();
		});
});