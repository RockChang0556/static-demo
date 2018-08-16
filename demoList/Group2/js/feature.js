			window.onload = function() {
				window.onscroll = function() {
					console.log(document.body.scrollTop);
					if(document.body.scrollTop != 0) {
						document.getElementsByTagName('header')[0].style.opacity = '.9';
					}
					if(document.body.scrollTop == 0) {
						document.getElementsByTagName('header')[0].style.opacity = '1';
					}
					if(document.body.scrollTop > 200) {
						document.getElementsByClassName('fea-six')[0].getElementsByTagName('li')[3].style.animation = 'qqma 0.7s 0.3s forwards';
						document.getElementsByClassName('fea-six')[0].getElementsByTagName('li')[4].style.animation = 'qqma 0.7s 0.3s forwards';
						document.getElementsByClassName('fea-six')[0].getElementsByTagName('li')[5].style.animation = 'qqma 0.7s 0.3s forwards';
					}
					if(document.body.scrollTop > 400) {
						document.getElementsByClassName('footer-top')[0].style.animation = 'qqma 0.7s 0.3s forwards';
					}
					if(document.body.scrollTop > 580) {
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