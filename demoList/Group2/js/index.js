window.onload = function() {
//	myScroll();
	window.onscroll = function() {
		console.log(document.body.scrollTop)
//		myScroll();
	}
	
	
	var count = 1;
	var oTimer;

	//循环附加index值，并且点击实现广告跳转
	fClick();

	//	console.log(document.getElementsByClassName('aside_pic')[0].offsetWidth);
	//定义计时器（网页打开时广告轮播）
	FTimer();

	//鼠标离开时图片轮播
	document.getElementById('aside_right_lb').onmouseleave = function() {
		FTimer();
	};

	//鼠标进入广告栏时图片停止轮播
	document.getElementById('aside_right_lb').onmouseenter = function() {
		clearInterval(oTimer);
	};

	//循环附加index值，并且点击实现广告跳转
	function fClick() {
		for(var i = 0; i < document.getElementsByClassName('aside_btn').length; i++) {
			document.getElementsByClassName('aside_btn')[i].index = i;
			document.getElementsByClassName('aside_btn')[i].onclick = function() {
				//alert(this.index);
				for(var i = 0; i < document.getElementsByClassName('aside_pic').length; i++) {
					document.getElementsByClassName('aside_pic')[i].style.opacity = '0';
				}
				document.getElementsByClassName('aside_pic')[this.index].style.opacity = '1';
				//点击之后按钮样式发生变化
				for(var i = 0; i < document.getElementsByClassName('aside_btn').length; i++) {
					document.getElementsByClassName('aside_btn')[i].style.backgroundColor = '#ffffff';
				}
				this.style.backgroundColor = '#ec5844';
				count = this.index;
			}
		};

	}

	//定义计时器（网页打开时广告轮播）
	function FTimer() {
		oTimer = setInterval(function() {
			//					document.getElementById('banner_inner').style.left = - (document.getElementsByClassName('banner_pic')[0].offsetWidth) * count + 'px';
			for(var i = 0; i < document.getElementsByClassName('aside_pic').length; i++) {
				document.getElementsByClassName('aside_pic')[i].style.opacity = '0';
			}
			document.getElementsByClassName('aside_pic')[count].style.opacity = '1';
			for(var i = 0; i < document.getElementsByClassName('aside_btn').length; i++) {
				document.getElementsByClassName('aside_btn')[i].style.backgroundColor = '#FFFFFF';
			}
			document.getElementsByClassName('aside_btn')[count].style.backgroundColor = '#ec5844';
			count++;
			if(count > document.getElementsByClassName('aside_pic').length - 1) {
				count = 0;
			};
			//					console.log(count);
		}, 2000);
	};
	//菜单栏悬浮更换页面
	var oMenu = document.getElementsByClassName('main-menu')[0].getElementsByTagName('li');
	var oMainway = document.getElementsByClassName('main-right');
	for(var i = 0; i < oMenu.length; i++) {
		oMenu[i].index = i;
		oMenu[i].onmouseover = function() {
			console.log('oMenu');
			for(var i = 0; i < oMenu.length; i++) {
				oMenu[i].setAttribute('class', '');
			}
			oMenu[this.index].setAttribute('class', 'menu-now1');

			for(var j = 0; j < oMainway.length; j++) {
				oMainway[j].setAttribute('id', '');
			}
			oMainway[this.index].setAttribute('id', 'right-now');
		}
	}

	document.getElementsByClassName('article_About_ONE')[0].style.animation = 'qqma 0.7s 0.3s forwards';
	document.getElementsByClassName('article_About_ONE')[1].style.animation = 'qqma 0.7s 0.3s forwards';
	document.getElementsByClassName('article_About_ONE')[2].style.animation = 'qqma 0.7s 0.3s forwards';
	

	var flag = true;
	function myScroll() {
		console.log(document.body.scrollTop);
		var mainrLi = document.getElementsByClassName('main-right')[0].getElementsByTagName('li');
		if(document.body.scrollTop != 0) {
			document.getElementsByTagName('header')[0].style.opacity = '.9';
		}
		if(document.body.scrollTop == 0) {
			document.getElementsByTagName('header')[0].style.opacity = '1';
		}
		if(document.body.scrollTop > 50) {
			document.getElementsByClassName('article_About_ONE')[3].style.animation = 'qqma 0.7s 0.3s forwards';
			document.getElementsByClassName('article_About_ONE')[4].style.animation = 'qqma 0.7s 0.3s forwards';
			document.getElementsByClassName('article_About_ONE')[5].style.animation = 'qqma 0.7s 0.3s forwards';
		}
		if(document.body.scrollTop > 284) {
			document.getElementsByClassName('article_buy_con')[0].style.animation = 'wisdom 1s 0.3s forwards';
		}
		if(document.body.scrollTop > 491) {
			document.getElementsByClassName('article_tittle')[0].style.animation = 'wisdom 1s 0.3s forwards';
		}
		if(document.body.scrollTop > 570) {
			document.getElementsByClassName('article_mate')[0].style.animation = 'mate-l 1s 0.3s forwards';
			document.getElementsByClassName('article_mate')[1].style.animation = 'mate-l 1s 0.3s forwards';
			document.getElementsByClassName('article_mate')[2].style.animation = 'mate-r 1s 0.3s forwards';
			document.getElementsByClassName('article_mate')[3].style.animation = 'mate-r 1s 0.3s forwards';
		}
		if(document.body.scrollTop > 1126) {
			document.getElementsByClassName('article_buy_con')[1].style.animation = 'wisdom 1s 0.3s forwards';
		}
		if(document.body.scrollTop > 1360) {
			document.getElementsByClassName('main-menu')[0].getElementsByTagName('p')[0].style.animation = 'logo 1s 0.3s forwards';
			document.getElementsByClassName('main-menu')[0].getElementsByTagName('ul')[0].style.animation = 'link1 1s 0.3s forwards';
		}
		if(document.body.scrollTop > 1400) {
			document.getElementsByClassName('main-left')[0].getElementsByTagName('li')[0].classList.add('qqma_animate');
			if(flag) {
				mainrLi[0].classList.add('qqma_animate');
				mainrLi[1].classList.add('qqma_animate');
				mainrLi[2].classList.add('qqma_animate');
			}
			setTimeout(function() {
				mainrLi[0].classList.remove('qqma_animate');
				mainrLi[1].classList.remove('qqma_animate');
				mainrLi[2].classList.remove('qqma_animate');
				mainrLi[0].style.transform = 'scale(1)';
				mainrLi[1].style.transform = 'scale(1)';
				mainrLi[2].style.transform = 'scale(1)';
				flag = false;
			}, 1300);
		}
		if(document.body.scrollTop > 1715) {
			document.getElementsByClassName('main-left')[0].getElementsByTagName('li')[1].classList.add('qqma_animate');
			if(flag) {
				mainrLi[3].classList.add('qqma_animate');
				mainrLi[4].classList.add('qqma_animate');
				mainrLi[5].classList.add('qqma_animate');
			}
			setTimeout(function() {
				mainrLi[3].classList.remove('qqma_animate');
				mainrLi[4].classList.remove('qqma_animate');
				mainrLi[5].classList.remove('qqma_animate');
				mainrLi[3].style.transform = 'scale(1)';
				mainrLi[4].style.transform = 'scale(1)';
				mainrLi[5].style.transform = 'scale(1)';
				flag = false;
			}, 1300);
		}
		if(document.body.scrollTop > 2050) {
			document.getElementsByClassName('footer-top')[0].style.animation = 'qqma 0.7s 0.3s forwards';
		}
		if(document.body.scrollTop > 2130) {
			document.getElementsByClassName('footer-logo')[0].style.animation = 'logo 1s 0.3s forwards';
			document.getElementsByClassName('copyright')[0].style.animation = 'link1 1s 0.3s forwards';
		}
	}

	/*function create_rabbit(e) {
		var s = new HoverRabbit();
		s.start();
	}
	if(window.attachEvent) window.attachEvent("onload", create_rabbit);
	else window.addEventListener("load", create_rabbit, false);*/
}