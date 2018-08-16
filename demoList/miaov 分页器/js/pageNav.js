// 分页器----注意：html中需要有一个id为xxx的盒子
// 参数 ：id，当前页，总页数,回调函数
function pageNav(opt) {
	if(!opt.id) {
		return false
	};
	var obj = $("#" + opt.id);
	var nowPage = opt.nowPage || 1,
		allPage = opt.allPage || 5,
		callBack = opt.callBack || function() {};

	// 创建首页
	if(nowPage >= 4 && allPage >= 6) {
		var oA = $('<a href="#1">[首页]</a>');
		obj.append(oA);
	}
	// 创建上一页
	if(nowPage != 1) {
		var oA = $('<a href="#' + (nowPage - 1) + '">[上一页]</a>');
		obj.append(oA);
	}

	// 总页数<=5,直接排开
	if(allPage <= 5) {
		for(var i = 1; i <= allPage; i++) {
			var oA = $('<a href="#' + i + '">[' + i + ']</a>');
			if(nowPage == i) {
				oA.text(i).css("color", "red");
			}
			obj.append(oA);
		}
		// 总页数>5,根据当前页数创建
	} else {
		for(var i = 1; i <= 5; i++) {
			// 当前页小于3，创建前几个
			if(nowPage < 3) {
				var oA = $('<a href="#' + i + '">[' + i + ']</a>');
				if(nowPage == i) {
					oA.text(i).css("color", "red");
				}
				// 最后几个
			} else if((allPage - nowPage) < 2) {
				var oA = $('<a></a>');
				oA.attr("href", "#" + (allPage - 5 + i)).css("color", "red");;
				if((allPage - nowPage) == 0 && i == 5) {
					oA.text(allPage - 5 + i);
				} else if((allPage - nowPage) == 1 && i == 4) {
					oA.text(allPage - 5 + i);
				} else {
					oA.text('[' + (allPage - 5 + i) + ']').css("color", "black");
				}

				// 中间部分	
			} else {
				var oA = $('<a href="#' + (nowPage - 3 + i) + '">[' + (nowPage - 3 + i) + ']</a>');
				if(i == 3) {
					oA.text(nowPage - 3 + i).css("color", "red");
				}
			}
			obj.append(oA);
		}
	}

	// 创建下一页
	if(allPage - nowPage >= 1) {
		var oA = $('<a href="#' + (nowPage + 1) + '">[下一页]</a>');
		obj.append(oA);
	}
	// 创建尾页
	if(allPage - nowPage >= 3 && allPage >= 6) {
		var oA = $('<a href="#' + allPage + '">[尾页]</a>');
		obj.append(oA);
	}
	callBack(nowPage, allPage);
	// 点击
	obj.find("a").click(function() {
		obj.html('');
		var nowPage = parseInt($(this).attr("href").slice(1));
		pageNav({
			id: opt.id,
			nowPage: nowPage,
			allPage: allPage,
			callBack: callBack
		});
		return false;
	})

}