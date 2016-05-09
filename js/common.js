/**
 * Created by hxpeng on 2016/5/9.
 */




jQuery(function () {



    $("#st-content").scroll(function () {
        $("#st-content").scrollTop() > 1500 ? $("#backTop_box").fadeIn() : $("#backTop_box").fadeOut()
    })
    $("#backTop_box").click(function () {
        $("#st-content").animate({ scrollTop: 0 }, 800)
    })

})