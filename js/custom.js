$(document).ready(function(){

	$('.navbar-brand').click(function(){
		$('.panel-collapse').collapse('hide');
	});
	
	$('#whyNav').click(function(){
		toggleActive(this);
		$('#collapseOne').collapse('show');
	});
	
	$('#flavorNav').click(function(){
		toggleActive(this);
		$('#collapseTwo').collapse('show');
	});

	$('#artNav').click(function(){
		toggleActive(this);
		$('#collapseThree').collapse('show');
	});

	$('#hungerNav').click(function(){
		toggleActive(this);
		$('#collapseFour').collapse('show');
	});

	$('#accordion').on('hidden.bs.collapse', toggleChevron);
	$('#accordion').on('shown.bs.collapse', toggleChevron);

});

function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}

function toggleActive(e) {
	if ( $(e).parent().hasClass('active') ) {
		return false;
	}
	$('.panel-collapse').collapse('hide');
	$('.nav li').removeClass('active');
	$(e).parent().addClass('active');
}
