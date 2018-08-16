window.onload = function(){
	window.onscroll = function(){
		console.log(document.body.scrollTop);
		if(document.body.scrollTop != 0) {
			document.getElementsByTagName('header')[0].style.opacity = '.9';
		}
		if(document.body.scrollTop == 0) {
			document.getElementsByTagName('header')[0].style.opacity = '1';
		}
		if(document.body.scrollTop > 10) {
			document.getElementsByClassName('footer-top')[0].style.animation = 'qqma 0.7s 0.3s forwards';
		}
		if(document.body.scrollTop > 200) {
			document.getElementsByClassName('footer-logo')[0].style.animation = 'logo 1s 0.3s forwards';
			document.getElementsByClassName('copyright')[0].style.animation = 'link1 1s 0.3s forwards';
		}
	}
//	图片
	var index;
	var pic_now;
	for(var i=0;i<document.getElementsByClassName('img').length;i++){
		document.getElementsByClassName('img')[i].index = i;
		document.getElementsByClassName('img')[i].onclick = function(){
			index = this.index;
			pic_now = document.getElementsByClassName('img')[index].getElementsByTagName('img')[0].getAttribute('src');
			document.getElementsByClassName('big_pic')[0].getElementsByTagName('img')[0].setAttribute('src',pic_now);
			document.getElementsByClassName('big_pic')[0].style.display = 'block';
		}
		document.getElementsByClassName('btn-left')[0].onclick = function(){
			index--;
			if(index<0){
				index=0;
			}
			pic_now = document.getElementsByClassName('img')[index].getElementsByTagName('img')[0].getAttribute('src');
			document.getElementsByClassName('big_pic')[0].getElementsByTagName('img')[0].setAttribute('src',pic_now);
		}
		document.getElementsByClassName('btn-right')[0].onclick = function(){
			index++;
			if(index<1){
				index=20;
			}
			pic_now = document.getElementsByClassName('img')[index].getElementsByTagName('img')[0].getAttribute('src');
			document.getElementsByClassName('big_pic')[0].getElementsByTagName('img')[0].setAttribute('src',pic_now);
		}
	};
	document.getElementsByClassName('close_btn')[0].onclick = function(){
		document.getElementsByClassName('big_pic')[0].style.display = 'none';
	}
	
	var oMenu = document.getElementsByClassName('menu-y')[0].getElementsByTagName('li');
	var oMainway = document.getElementsByClassName('pic');
	for(var i = 0; i < oMenu.length; i++) {
		oMenu[i].index = i;
		oMenu[i].onclick = function() {
			console.log(i);
			for(var i = 0; i < oMenu.length; i++) {
				oMenu[i].setAttribute('class', '');
			}
			oMenu[this.index].setAttribute('class', 'menu-all');

			//						console.log(this.index);
			for(var j = 0; j < oMainway.length; j++) {
				oMainway[j].setAttribute('id', '');
			}
			oMainway[this.index].setAttribute('id', 'right-now');
		}
	}
}

function create_rabbit(e) {
		var s = new HoverRabbit();
		s.start();
	}
	if(window.attachEvent) window.attachEvent("onload", create_rabbit);
	else window.addEventListener("load", create_rabbit, false);
