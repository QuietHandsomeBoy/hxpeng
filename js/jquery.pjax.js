!
    function() {
        var a = 0;
        $.fn.scrolled = function(i, n) {
            "function" == typeof i && (n = i, i = 200);
            var t = "scrollTimer" + a++;
            this.scroll(function() {
                var a = $(this),
                    o = a.data(t);
                o && clearTimeout(o),
                    o = setTimeout(function() {
                            a.removeData(t),
                                n.call(a[0])
                        },
                        i),
                    a.data(t, o)
            })
        },
            $.fn.AniView = function(a) {
                function i(a) {
                    var i = $(a).offset(),
                        t = i.top + $(a).position().top,
                        o = (i.top + $(a).position().top + $(a).height(), $("#st-content").position().top + $("#st-content").height());
                    if (t < o - n.animateThreshold) {
                        return ! 0
                    }
                }
                var n = $.extend({
                        animateThreshold: -600,
                        scrollPollInterval: 0
                    },
                    a),
                    t = this;
                $(t).each(function(a, i) {
                    $(i).wrap('<div class="av-container"></div>'),
                        $(i).css("opacity", 0)
                }),
                    $(t).each(function(a, n) {
                        var t = $(n).parent(".av-container");
                        $(n).is("[av-animation]") && !$(t).hasClass("av-visible") && i(t) && ($(n).css("opacity", 1), $(t).addClass("av-visible"), $(n).addClass("animated " + $(n).attr("av-animation")))
                    }),
                    $("#st-content").scrolled(n.scrollPollInterval,
                        function() {
                            $(t).each(function(a, n) {
                                var t = $(n).parent(".av-container");
                                $(n).is("[av-animation]") && !$(t).hasClass("av-visible") && i(t) && ($(n).css("opacity", 1), $(t).addClass("av-visible"), $(n).addClass("animated " + $(n).attr("av-animation")))
                            })
                        })
            }
    } ();