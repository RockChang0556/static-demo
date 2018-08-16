	var content = 1;
	var oContent;
	window.onload = function(){
		window.onscroll = function(){
			console.log(document.body.scrollTop);
			if(document.body.scrollTop != 0) {
				document.getElementsByTagName('header')[0].style.opacity = '.9';
			}
			if(document.body.scrollTop == 0) {
				document.getElementsByTagName('header')[0].style.opacity = '1';
			}
			if(document.body.scrollTop > 50) {
				document.getElementsByClassName('footer-top')[0].style.animation = 'qqma 0.7s 0.3s forwards';
			}
			if(document.body.scrollTop > 206) {
				document.getElementsByClassName('footer-logo')[0].style.animation = 'logo 1s 0.3s forwards';
				document.getElementsByClassName('copyright')[0].style.animation = 'link1 1s 0.3s forwards';
			}
		}
		
		document.getElementById('submit').onclick = function(){
			oSug();
		}
//		document.getElementById('submit1').onkeydown = function(event) {
//			if(event.keyCode == '13'){
//				oSug();
//			}
//		}
	}
	
	//留言函数
	function oSug(){
		var oName = document.getElementById('nname').value;
		var oCom = document.getElementById('comment').value;
		
		//获取当前时间
		var oDate = new Date;
		var year = oDate.getFullYear();
		var mon = oDate.getMonth();
		var day = oDate.getDate();
		var hour = oDate.getHours();
		var min = oDate.getMinutes();
			if(min<10){
				min = '0' + min; 
			}
		var Otime = year + '年' + (mon+1) + '月' + day + '日' + ' ' + hour + ':' + min;	
		
		if(oCom == ''&&oName == ''){
			alert('请输入用户昵称和你想说的话');
		}else if(oName == ''){
			alert('请输入用户昵称');
		}else if(oCom == ''){
			alert('请输入你想说的话');
		}else{
			oContent = '<li>';
			oContent += '<h3>' + content + '</h3>';
			oContent += '<div class="add-sug">';
			oContent += '<span>'+ oName + '</span>';
			oContent += '<span>' + '评论于：'+ Otime + '</span>';
			oContent += '<p>' + oCom + '</p>';
			oContent += '</div>';
			oContent += '</li>';
			document.getElementsByClassName('sug-ul')[0].innerHTML += oContent;
			content++;
		}
		
	}
	
	
	function create_rabbit(e) {
		var s = new HoverRabbit();
		s.start();
	}
	if(window.attachEvent) window.attachEvent("onload", create_rabbit);
	else window.addEventListener("load", create_rabbit, false);