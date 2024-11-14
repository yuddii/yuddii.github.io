// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/favicon.png");
        document.title = '你不喜欢我了嘛~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.png");
        document.title = '我喜欢你啊~';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});