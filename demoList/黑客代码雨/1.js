// 数字流
function numberRain() {
    this.eleDom = '#rain';
    this.eleDomCols = 40; 
    this.str = '';
    this.time = 2500;
    this.colorLen = 0;
    this.proportion = 0;
    this.height = 0;
    this.numberMax = 30;
    this.numberMin = 10;

    this.init();
}
// 初始化
numberRain.prototype.init = function () {
    _this = this;
    this.height = screen.availHeight -100;
    $(this.eleDom).css({
        height: _this.height 
    })
    this.initColumns();
    setTimeout(function(){
        _this.removeNumber();
    }, _this.time * 4);
}

// 初始化数字流列数
numberRain.prototype.initColumns = function (){
    var _this = this;
    var cols = this.eleDomCols;
    var eleDom = $(this.eleDom);
    var oUl = $('<ul class="number_ul"></ul>');
   
    for(var cols_i =0; cols_i<cols; cols_i++){
        oUl.append('<li style="width: calc(100% / '+ cols +');"></li>')
    }
    eleDom.append(oUl);
    _this.addNumber(eleDom.find('.number_ul'));
    setInterval(function(){
        _this.addNumber(eleDom.find('.number_ul'));
    }, _this.time);
}

// 添加数字流
numberRain.prototype.addNumber = function (ele) {
    _this = this;
    var eleP = '';
    var str = '';
    var max = this.numberMax;
    var min = this.numberMin;
    $(ele).find('li').each(function () {
        eleP = $('<p></p>');
        str = _this.randomString(Math.floor(Math.random() * (max - min + 1) + min));
        _this.colorLen = str.length;
        _this.proportion = (1 / str.length).toFixed(2);
        for (var i = 0; i < str.length; i++) {
            eleP.append('<span style="display: none;">' + str[i] + '</span>');
        }
        
        $(this).prepend(eleP);
        eleP.find('span').each(_this.setFontColor);
        _this.moveNumber(eleP, str.length);
    })
}
/** 模拟移动
    将单个的字体初始隐藏，在将文字单个显示
    以文本最后一个开始显示
*/ 
numberRain.prototype.moveNumber = function(ele, start){
    var _this = this;
    var i = 0;
    var time = setInterval(function(){
        i ++;
        $(ele).find('span').eq(start - i).show();
        if(i > start){
            clearInterval(time);
        }
    }, _this.time / start);
    
}
// 删除元素
numberRain.prototype.removeNumber = function (ele) {
    var _this = this;
    var eleDom = $(this.eleDom);
    setInterval(function(){
        eleDom.find('li').each(function(){
            $(this).find('p:last').remove();
        })
    }, _this.time);
}
// 设置文字样色
numberRain.prototype.setFontColor = function (key, val) {
    $(val).css({
        color: 'rgba(1, 255, 0, ' + ((key * _this.proportion) + 0.12) + ')'
    })
}
// 随机字符
numberRain.prototype.randomString = function (len) {
　　len = len || 9;
    /**
        默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
    */
　　var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
　　var maxPos = chars.length;
　　var pwd = '';
　　for (i = 0; i < len; i++) {
    　　　　pwd += chars.charAt(Math.floor(Math.random() * maxPos));
　　}
　　return pwd;
}
new numberRain();
