// const p = document.createElement('p')
// p.textContent = 'Hello from webpack!'
// document.body.append(p)


$(document).ready(function(){
	var a = $('.hidden-text-01');

	var b = $('.hidden-text-02');

	var c = $('.hidden-text-03');

	var d = $('.hidden-text-04');

	a.hide();
	b.hide();
	c.hide();
	d.hide();

	$('.toggle-01').click(function(){
		  a.slideToggle();
	});

	$('.toggle-02').click(function(){
		  b.slideToggle();
	});

	$('.toggle-03').click(function(){
		  c.slideToggle();
	});

	$('.toggle-04').click(function(){
		  d.slideToggle();
	});


});