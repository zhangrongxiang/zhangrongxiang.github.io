try {
    $("<link>").attr({
        href:"https://cdn.jsdelivr.net/gh/zhangrongxiang/zhangrongxiang.github.io@latest/live2d/assets/waifu.min.css",
        rel:"stylesheet",
        type:"text/css"
    }).appendTo("head"), $("body").append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>'), 
    $.ajax({
        url:"https://cdn.jsdelivr.net/gh/zhangrongxiang/zhangrongxiang.github.io@latest/live2d/assets/waifu-tips.js",
        dataType:"script",
        cache:!0,
        success:function() {
            $.ajax({
                url:"https://cdn.jsdelivr.net/gh/zhangrongxiang/zhangrongxiang.github.io@latest/live2d/assets/live2d.min.js",
                dataType:"script",
                cache:!0,
                success:function() {
                    live2d_settings.hitokotoAPI = "hitokoto.cn", live2d_settings.modelId = 1, live2d_settings.modelTexturesId = 81, live2d_settings.waifuEdgeSide = 'left:50',
                    live2d_settings.modelStorage = !1, initModel("https://cdn.jsdelivr.net/gh/zhangrongxiang/zhangrongxiang.github.io@latest/live2d/assets/waifu-tips.json");
                }
            });
        }
    });
} catch (s) {
    console.log("[Error] JQuery is not defined.");
}