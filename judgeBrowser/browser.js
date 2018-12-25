//区分各种浏览器，将代码传到cdn上，然后取cdn的链接，实现一套代码多用

//将js引入在vue 里面的index.html中，互不干扰
(function(){
    var hm = document.createElement("script");
    hm.src = "http://cdn.fanxiaogou.cn/compatible/browser.js";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
})()

(function () {
    var hm = document.createElement("link");
    hm.rel = 'stylesheet'
    hm.href = "http://cdn.fanxiaogou.cn/compatible/browser.css";
    document.head.appendChild(hm);
    hm.onload = function(){
        init();
    }

    function init(){
        var browser = document.createElement('div');
        browser.setAttribute('id', 'browser');

        var html="";
        html += "<img class='icon1' src='http://cdn.fanxiaogou.cn/compatible/img/js.png'>";
        html += "<div class='texts'>为了您更好的使用体验，建议使用";
        html += "      <a href='http://www.google.cn/chrome/' target='_Blank'>谷歌浏览器</a>";
        html += "</div>";
        html += "<img id='close' class='icon2' src='http://cdn.fanxiaogou.cn/compatible/img/close.png' />"

        browser.innerHTML = html;


        var browserName = navigator.userAgent.toLowerCase();
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串 
         //识别浏览器
        var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器 
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;//判断是否小于ie11浏览器
        var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1; //判断当前浏览器是ie11
        var qq = userAgent.indexOf('QQBrowser') > -1;//判断是否为qq
        var sougou = userAgent.toLowerCase().indexOf('se 2.x')>-1;//判断是否是搜狗
        var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
        var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器 
        var isChrome = userAgent.indexOf("Chrome") > -1;//判断Chrome浏览器 
        var is360 = _mime("type", "application/vnd.chromium.remoting-viewer");//检测360极速浏览器
        var isSafari = browserName.indexOf("safari") != -1; //判断是否是safari
        var isSafari1 = /webkit/i.test(browserName) &&!(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName));//判断是否是safari


        if(isEdge || qq || sougou || isOpera || isFF  ||isIE ||isIE11|| is360  ){
            document.body.appendChild(browser);
        }  

        if(isEdge || qq || sougou || isOpera || isFF  ||isIE ||isIE11|| is360  ){
            document.getElementById('close').onclick = function(){
                document.body.removeChild(browser);  
            }
        }  
        
        //测试mime
        function _mime(option, value) {
            var mimeTypes = navigator.mimeTypes;
            for (var mt in mimeTypes) {
                if (mimeTypes[mt][option] == value) {
                    return true;
                }
            }
            return false;
        } 
    }
})();

