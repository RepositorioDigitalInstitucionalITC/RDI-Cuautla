$(document).ready(function () {

    var widthBrowser = window.outerWidth;

    flag = localStorage.setItem("flag", 1);
    flag = localStorage.setItem("flag-r", 1);
    $("#hover-right").click(function () {
        if (localStorage.getItem('flag') == 0) {
            $("#dark-info-1").css("z-index", "99");
            $("#dark-info-2").css("z-index", "9");
            $("#dark-info-3").css("z-index", "9");
            $("#dark-info-1").css("transform", "translateX(5px) scale(1)");
            $("#dark-info-2").css("transform", "translateX(-0px) scale(1)");
            $("#dark-info-3").css("transform", "translateX(-10px) scale(1)");
            localStorage.setItem('flag', 1);
            $("#dark-info-3").css("opacity", 0.6);
            $("#dark-info-1").css("opacity", 1);
        } else if (localStorage.getItem('flag') == 1) {
            $("#dark-info-2").css("z-index", "99");
            $("#dark-info-3").css("z-index", "9");
            $("#dark-info-1").css("z-index", "9");
            $("#dark-info-3").css("transform", "translateX(-340px)  ");
            $("#dark-info-1").css("transform", "translateX(160px) scale(.8)");
            $("#dark-info-2").css("transform", "translateX(170px) scale(1.3)");
            // Opacity
            $("#dark-info-1").css("opacity", 0.6);
            $("#dark-info-2").css("opacity", 1);
            localStorage.setItem('flag', 2);
        } else if (localStorage.getItem('flag') == 2) {
            $("#dark-info-3").css("z-index", "99");
            $("#dark-info-2").css("z-index", "9");
            $("#dark-info-1").css("z-index", "9");
            $("#dark-info-2").css("transform", "translateX(330px) scale(1) ");
            $("#dark-info-3").css("transform", "translateX(-180px) scale(1.3)");
            $("#dark-info-1").css("transform", "translateX(-160px) scale(0.8) ");
            localStorage.setItem('flag', 0);
            $("#dark-info-3").css("opacity", 1);
            $("#dark-info-2").css("opacity", 0.6);
        }
    });


    $("#hover-left").click(function () {
        if (localStorage.getItem('flag') == 0) {
            $("#dark-info-3").css("z-index", "9");
            $("#dark-info-2").css("z-index", "9");
            $("#dark-info-1").css("z-index", "99");
            $("#dark-info-3").css("transform", "translateX(00px) scale(1)");
            $("#dark-info-1").css("transform", "translateX(0px) scale(1)");
            $("#dark-info-2").css("transform", "translateX(0px)");
            localStorage.setItem('flag', 1);
            $("#dark-info-1").css("opacity", 1);
            $("#dark-info-2").css("opacity", 0.6);
        } else if (localStorage.getItem('flag') == 1) {
            $("#dark-info-2").css("z-index", "9");
            $("#dark-info-3").css("z-index", "99");
            $("#dark-info-1").css("z-index", "9");
            $("#dark-info-2").css("transform", "translateX(330px) scale(1)");
            $("#dark-info-3").css("transform", "translateX(-170px) scale(1.3)");
            $("#dark-info-1").css("transform", "translateX(-158px)  scale(.8)");
            localStorage.setItem('flag', 2);
            $("#dark-info-3").css("opacity", 1);
            $("#dark-info-1").css("opacity", 0.6);
        } else if (localStorage.getItem('flag') == 2) {
            $("#dark-info-1").css("z-index", "9");
            $("#dark-info-2").css("z-index", "99");
            $("#dark-info-3").css("z-index", "9");
            $("#dark-info-1").css("transform", "translateX(160px) scale(.8)");
            $("#dark-info-2").css("transform", "translateX(168px) scale(1.3)");
            $("#dark-info-3").css("transform", "translateX(-340px)");
            localStorage.setItem('flag', 0);
            $("#dark-info-3").css("opacity", 0.6);
            $("#dark-info-2").css("opacity", 1);
        }
    });

    // ================== Right

    $("#hover-right-1").click(function () {
        if (localStorage.getItem('flag') == 0) {
            $("#dark-info-4-r").css("z-index", "99");
            $("#dark-info-5-r").css("z-index", "9");
            $("#dark-info-6-r").css("z-index", "9");
            $("#dark-info-4-r").css("transform", "translateX(5px) scale(1)");
            $("#dark-info-5-r").css("transform", "translateX(-0px) scale(1)");
            $("#dark-info-6-r").css("transform", "translateX(-10px) scale(1)");
            localStorage.setItem('flag', 1);
            $("#dark-info-6-r").css("opacity", 0.6);
            $("#dark-info-4-r").css("opacity", 1);
        } else if (localStorage.getItem('flag') == 1) {
            $("#dark-info-5-r").css("z-index", "99");
            $("#dark-info-6-r").css("z-index", "9");
            $("#dark-info-4-r").css("z-index", "9");
            $("#dark-info-6-r").css("transform", "translateX(-340px)  ");
            $("#dark-info-4-r").css("transform", "translateX(160px) scale(.8)");
            $("#dark-info-5-r").css("transform", "translateX(170px) scale(1.3)");
            // Opacity
            $("#dark-info-4-r").css("opacity", 0.6);
            $("#dark-info-5-r").css("opacity", 1);
            localStorage.setItem('flag', 2);
        } else if (localStorage.getItem('flag') == 2) {
            $("#dark-info-6-r").css("z-index", "99");
            $("#dark-info-5-r").css("z-index", "9");
            $("#dark-info-4-r").css("z-index", "9");
            $("#dark-info-5-r").css("transform", "translateX(330px) scale(1) ");
            $("#dark-info-6-r").css("transform", "translateX(-170px) scale(1.3)");
            $("#dark-info-4-r").css("transform", "translateX(-160px) scale(0.8) ");
            localStorage.setItem('flag', 0);
            $("#dark-info-6-r").css("opacity", 1);
            $("#dark-info-5-r").css("opacity", 0.6);
        }
    });
    // Left

    $("#hover-left-1").click(function () {
        if (localStorage.getItem('flag') == 0) {
            $("#dark-info-6-r").css("z-index", "9");
            $("#dark-info-5-r").css("z-index", "9");
            $("#dark-info-4-r").css("z-index", "99");
            $("#dark-info-6-r").css("transform", "translateX(0px) scale(1)");
            $("#dark-info-4-r").css("transform", "translateX(0px) scale(1)");
            $("#dark-info-5-r").css("transform", "translateX(0px)");
            localStorage.setItem('flag', 1);
            $("#dark-info-4-r").css("opacity", 1);
            $("#dark-info-5-r").css("opacity", 0.6);
        } else if (localStorage.getItem('flag') == 1) {
            $("#dark-info-5-r").css("z-index", "9");
            $("#dark-info-6-r").css("z-index", "99");
            $("#dark-info-4-r").css("z-index", "9");
            $("#dark-info-5-r").css("transform", "translateX(335px) scale(1)");
            $("#dark-info-6-r").css("transform", "translateX(-180px) scale(1.3)");
            $("#dark-info-4-r").css("transform", "translateX(-165px)  scale(.8)");
            localStorage.setItem('flag', 2);
            $("#dark-info-6-r").css("opacity", 1);
            $("#dark-info-4-r").css("opacity", 0.6);
        } else if (localStorage.getItem('flag') == 2) {
            $("#dark-info-4-r").css("z-index", "9");
            $("#dark-info-5-r").css("z-index", "99");
            $("#dark-info-6-r").css("z-index", "9");
            $("#dark-info-4-r").css("transform", "translateX(160px) scale(.8)");
            $("#dark-info-5-r").css("transform", "translateX(168px) scale(1.3)");
            $("#dark-info-6-r").css("transform", "translateX(-340px)");
            localStorage.setItem('flag', 0);
            $("#dark-info-6-r").css("opacity", 0.6);
            $("#dark-info-5-r").css("opacity", 1);
        }
    });



    // Responsivez

    if (widthBrowser <= 414) {
        $("#hover-right").click(function () {
            if (localStorage.getItem('flag-r') == 0) {
                $("#dark-info-1").css("z-index", "99");
                $("#dark-info-2").css("z-index", "9");
                $("#dark-info-3").css("z-index", "9");
                $("#dark-info-1").css("transform", "translateX(0px) scale(1)");
                $("#dark-info-2").css("transform", "translateX(-0px) scale(1)");
                $("#dark-info-3").css("transform", "translateX(0px) scale(1)");
                localStorage.setItem('flag-r', 1);
                $("#dark-info-3").css("opacity", 0.6);
                $("#dark-info-1").css("opacity", 1);
            } else if (localStorage.getItem('flag-r') == 1) {
                $("#dark-info-2").css("z-index", "99");
                $("#dark-info-3").css("z-index", "9");
                $("#dark-info-1").css("z-index", "9");
                $("#dark-info-3").css("transform", "translateX(-212px)");
                $("#dark-info-1").css("transform", "translateX(104px) scale(.8)");
                $("#dark-info-2").css("transform", "translateX(106px) scale(1.3)");
                // Opacity
                $("#dark-info-1").css("opacity", 0.6);
                $("#dark-info-2").css("opacity", 1);
                localStorage.setItem('flag-r', 2);
            } else if (localStorage.getItem('flag-r') == 2) {
                $("#dark-info-3").css("z-index", "99");
                $("#dark-info-2").css("z-index", "9");
                $("#dark-info-1").css("z-index", "9");
                $("#dark-info-2").css("transform", "translateX(210px) scale(1) ");
                $("#dark-info-3").css("transform", "translateX(-100px) scale(1.3)");
                $("#dark-info-1").css("transform", "translateX(-104px) scale(0.8) ");
                $("#dark-info-3").css("opacity", 1);
                $("#dark-info-2").css("opacity", 0.6);
                localStorage.setItem('flag-r', 0);
            }
        });

        $("#hover-left").click(function () {
            if (localStorage.getItem('flag-r') == 0) {
                $("#dark-info-3").css("z-index", "9");
                $("#dark-info-2").css("z-index", "9");
                $("#dark-info-1").css("z-index", "99");
                $("#dark-info-3").css("transform", "translateX(0px) scale(1)");
                $("#dark-info-1").css("transform", "translateX(0px) scale(1)");
                $("#dark-info-2").css("transform", "translateX(0px)");
                localStorage.setItem('flag-r', 1);
                $("#dark-info-1").css("opacity", 1);
                $("#dark-info-2").css("opacity", 0.6);
            } else if (localStorage.getItem('flag-r') == 1) {
                $("#dark-info-2").css("z-index", "9");
                $("#dark-info-3").css("z-index", "99");
                $("#dark-info-1").css("z-index", "9");
                $("#dark-info-2").css("transform", "translateX(213px) scale(1)");
                $("#dark-info-3").css("transform", "translateX(-106px) scale(1.3)");
                $("#dark-info-1").css("transform", "translateX(-104px)  scale(.8)");
                localStorage.setItem('flag-r', 2);
                $("#dark-info-3").css("opacity", 1);
                $("#dark-info-1").css("opacity", 0.6);
            } else if (localStorage.getItem('flag-r') == 2) {
                $("#dark-info-1").css("z-index", "9");
                $("#dark-info-2").css("z-index", "99");
                $("#dark-info-3").css("z-index", "9");
                $("#dark-info-1").css("transform", "translateX(104px) scale(.8)");
                $("#dark-info-2").css("transform", "translateX(106px) scale(1.3)");
                $("#dark-info-3").css("transform", "translateX(-210px)");
                localStorage.setItem('flag-r', 0);
                $("#dark-info-3").css("opacity", 0.6);
                $("#dark-info-2").css("opacity", 1);
            }
        });

        $("#hover-right-1").click(function () {
            if (localStorage.getItem('flag-r') == 0) {
                $("#dark-info-4-r").css("z-index", "99");
                $("#dark-info-5-r").css("z-index", "9");
                $("#dark-info-6-r").css("z-index", "9");
                $("#dark-info-4-r").css("transform", "translateX(5px) scale(1)");
                $("#dark-info-5-r").css("transform", "translateX(-0px) scale(1)");
                $("#dark-info-6-r").css("transform", "translateX(0px) scale(1)");
                localStorage.setItem('flag-r', 1);
                $("#dark-info-6-r").css("opacity", 0.6);
                $("#dark-info-4-r").css("opacity", 1);
            } else if (localStorage.getItem('flag-r') == 1) {
                $("#dark-info-5-r").css("z-index", "99");
                $("#dark-info-6-r").css("z-index", "9");
                $("#dark-info-4-r").css("z-index", "9");
                $("#dark-info-6-r").css("transform", "translateX(-212px)  ");
                $("#dark-info-4-r").css("transform", "translateX(104px) scale(.8)");
                $("#dark-info-5-r").css("transform", "translateX(108px) scale(1.3)");
                // Opacity
                $("#dark-info-4-r").css("opacity", 0.6);
                $("#dark-info-5-r").css("opacity", 1);
                localStorage.setItem('flag-r', 2);
            } else if (localStorage.getItem('flag-r') == 2) {
                $("#dark-info-6-r").css("z-index", "99");
                $("#dark-info-5-r").css("z-index", "9");
                $("#dark-info-4-r").css("z-index", "9");
                $("#dark-info-5-r").css("transform", "translateX(212px) scale(1) ");
                $("#dark-info-6-r").css("transform", "translateX(-106px) scale(1.3)");
                $("#dark-info-4-r").css("transform", "translateX(-102px) scale(0.8) ");
                localStorage.setItem('flag-r', 0);
                $("#dark-info-6-r").css("opacity", 1);
                $("#dark-info-5-r").css("opacity", 0.6);
            }
        });
        // Left

        $("#hover-left-1").click(function () {
            if (localStorage.getItem('flag-r') == 0) {
                $("#dark-info-6-r").css("z-index", "9");
                $("#dark-info-5-r").css("z-index", "9");
                $("#dark-info-4-r").css("z-index", "99");
                $("#dark-info-6-r").css("transform", "translateX(0px) scale(1)");
                $("#dark-info-4-r").css("transform", "translateX(0px) scale(1)");
                $("#dark-info-5-r").css("transform", "translateX(0px)");
                localStorage.setItem('flag-r', 1);
                $("#dark-info-4-r").css("opacity", 1);
                $("#dark-info-5-r").css("opacity", 0.6);
            } else if (localStorage.getItem('flag-r') == 1) {
                $("#dark-info-5-r").css("z-index", "9");
                $("#dark-info-6-r").css("z-index", "99");
                $("#dark-info-4-r").css("z-index", "9");
                $("#dark-info-5-r").css("transform", "translateX(212px) scale(1)");
                $("#dark-info-6-r").css("transform", "translateX(-106px) scale(1.3)");
                $("#dark-info-4-r").css("transform", "translateX(-104px)  scale(.8)");
                localStorage.setItem('flag-r', 2);
                $("#dark-info-6-r").css("opacity", 1);
                $("#dark-info-4-r").css("opacity", 0.6);
            } else if (localStorage.getItem('flag-r') == 2) {
                $("#dark-info-4-r").css("z-index", "9");
                $("#dark-info-5-r").css("z-index", "99");
                $("#dark-info-6-r").css("z-index", "9");
                $("#dark-info-4-r").css("transform", "translateX(104px) scale(.8)");
                $("#dark-info-5-r").css("transform", "translateX(108px) scale(1.3)");
                $("#dark-info-6-r").css("transform", "translateX(-212px)");
                localStorage.setItem('flag-r', 0);
                $("#dark-info-6-r").css("opacity", 0.6);
                $("#dark-info-5-r").css("opacity", 1);
            }
        });



    }
    // end Resposive
});