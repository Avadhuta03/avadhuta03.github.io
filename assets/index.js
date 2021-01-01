// const p = document.createElement('p')
// p.textContent = 'Hello from webpack!'
// document.body.append(p)


$(document).ready(function(){
	var a = $('.hidden-text-01');

	var b = $('.hidden-text-02');


	a.hide();
	b.hide();

	$('.toggle-01').click(function(){
		  a.slideToggle();
	});

	$('.toggle-02').click(function(){
		  b.slideToggle();
	});


});