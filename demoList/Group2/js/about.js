window.onload = function(){
	window.onscroll = function(){
		console.log(document.body.scrollTop);
		if(document.body.scrollTop > 440) {
			document.getElementsByClassName('footer-top')[0].style.animation = 'qqma 0.7s 0.3s forwards';
		}
		if(document.body.scrollTop > 670) {
			document.getElementsByClassName('footer-logo')[0].style.animation = 'logo 1s 0.3s forwards';
			document.getElementsByClassName('copyright')[0].style.animation = 'link1 1s 0.3s forwards';
		}
	}
	
}



function create_rabbit(e) {
	var s = new HoverRabbit();
	s.start();
}
if(window.attachEvent) window.attachEvent("onload", create_rabbit);
else window.addEventListener("load", create_rabbit, false);