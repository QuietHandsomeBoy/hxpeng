/**
 * Created by hxpeng on 2016/6/22.
 */


$(function () {

    $(window).resize(function () {
        var leftPX = ($(window).width() - $('#loginBox').outerWidth()) / 2;
        var topPX = ($(window).height() - $('#loginBox').outerHeight()) / 2 + $(document).scrollTop();

        if (topPX < 70) {
            topPX = 70;
        }
        $('#loginBox').css({
            position: 'absolute',
            left: leftPX,
            top: topPX
        });
    });
    $(window).resize();

    $(function(){

    })

    $(document).pjax("a", "#leftBox", {fragment:'#leftBox'})
        .on("pjax:timeout", function (event) {
            event.preventDefault()
        })
        .on("pjax:start", function () {
            $(".loadingbox").addClass("loadingbox_test");
        })
        .on("pjax:send", function () {
            NProgress.start();
            $("#loginContent").fadeTo(500, 0);
        })
        .on("pjax:success", function () {

            setTimeout(function () {
                NProgress.done();
            }, 500);
        })
        .on("pjax:popstate",function(){
        })
        .on("pjax:end",function(){
            $('#leftBox .aniview').AniView();
        })
        .on("pjax:beforeReplace",function(){
        })


})