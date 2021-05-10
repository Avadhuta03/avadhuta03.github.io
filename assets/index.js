// const p = document.createElement('p')
// p.textContent = 'Hello from webpack!'
// document.body.append(p)


$(document).ready(function(){
	$('.t-btn').click(function(){
		$(this).next().slideToggle(300);
	});

	$('.l-btn').click(function(){

		$(this).next().slideToggle(300);

	})


});