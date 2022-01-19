$(document).ready(function() {
    flag = localStorage.setItem("flag", 1)
    $("#hover-right").click(function() {
        if (localStorage.getItem('flag') == 0) {
            $("#content1-dark").css("z-index", "99");
            $("#content-dark").css("z-index", "9");
            $("#content2-dark").css("z-index", "9");
            $("#content1-dark").css("transform", "translateX(0px) scale(1)");
            $("#content-dark").css("transform", "translateX(-0px) scale(1)");
            $("#content2-dark").css("transform", "translateX(0px) scale(1)");
            localStorage.setItem('flag', 1);
            $("#content2-dark").css("opacity", 0.6);
            $("#content1-dark").css("opacity", 1);
        } else if (localStorage.getItem('flag') == 1) {
            $("#content-dark").css("z-index", "99");
            $("#content2-dark").css("z-index", "9");
            $("#content1-dark").css("z-index", "9");
            $("#content2-dark").css("transform", "translateX(-494px) scale(1)");
            $("#content1-dark").css("transform", "translateX(246px) scale(.8)");
            $("#content-dark").css("transform", "translateX(246px) scale(1.3)");
            // Opacity
            $("#content1-dark").css("opacity", 0.6);
            $("#content-dark").css("opacity", 1);
            localStorage.setItem('flag', 2);
        } else if (localStorage.getItem('flag') == 2) {
            $("#content2-dark").css("z-index", "99");
            $("#content-dark").css("z-index", "9");
            $("#content1-dark").css("z-index", "9");
            $("#content-dark").css("transform", "translateX(494px) scale(1) ");
            $("#content2-dark").css("transform", "translateX(-248px) scale(1.3)");
            $("#content1-dark").css("transform", "translateX(-250px) scale(0.79) ");
            localStorage.setItem('flag', 0);
            $("#content2-dark").css("opacity", 1);
            $("#content-dark").css("opacity", 0.6);
        }
    });


    $("#hover-left").click(function() {
        if (localStorage.getItem('flag') == 0) {
            $("#content2-dark").css("z-index", "9");
            $("#content-dark").css("z-index", "9");
            $("#content1-dark").css("z-index", "99");
            $("#content2-dark").css("transform", "translateX(0px) scale(1)");
            $("#content1-dark").css("transform", "translateX(0px) scale(1)");
            $("#content-dark").css("transform", "translateX(0px)");
            localStorage.setItem('flag', 1);
            $("#content1-dark").css("opacity", 1);
            $("#content-dark").css("opacity", 0.6);
        } else if (localStorage.getItem('flag') == 1) {
            $("#content-dark").css("z-index", "9");
            $("#content2-dark").css("z-index", "99");
            $("#content1-dark").css("z-index", "9");
            $("#content-dark").css("transform", "translateX(494px) scale(1)");
            $("#content2-dark").css("transform", "translateX(-248px) scale(1.3)");
            $("#content1-dark").css("transform", "translateX(-254px)  scale(.8)");
            localStorage.setItem('flag', 2);
            $("#content2-dark").css("opacity", 1);
            $("#content1-dark").css("opacity", 0.6);
        } else if (localStorage.getItem('flag') == 2) {
            $("#content1-dark").css("z-index", "9");
            $("#content-dark").css("z-index", "99");
            $("#content2-dark").css("z-index", "9");
            $("#content1-dark").css("transform", "translateX(254px) scale(.8)");
            $("#content-dark").css("transform", "translateX(248px) scale(1.3)");
            $("#content2-dark").css("transform", "translateX(-494px)");
            localStorage.setItem('flag', 0);
            $("#content2-dark").css("opacity", 0.6);
            $("#content-dark").css("opacity", 1);
        }
    });


    // Responsive 
    const wscreen = screen.width;
    if (wscreen == 414) {
        $("#hover-right").click(function() {
            if (localStorage.getItem('flag') == 0) {
                $("#content1-dark").css("z-index", "99");
                $("#content-dark").css("z-index", "9");
                $("#content2-dark").css("z-index", "9");
                $("#content1-dark").css("transform", "translateX(0px) scale(1)");
                $("#content-dark").css("transform", "translateX(-0px) scale(1)");
                $("#content2-dark").css("transform", "translateX(0px) scale(1)");
                localStorage.setItem('flag', 1);
                $("#content2-dark").css("opacity", 0.6);
                $("#content1-dark").css("opacity", 1);
            } else if (localStorage.getItem('flag') == 1) {
                $("#content-dark").css("z-index", "99");
                $("#content2-dark").css("z-index", "9");
                $("#content1-dark").css("z-index", "9");
                $("#content2-dark").css("transform", "translateX(-206px) scale(1)");
                $("#content1-dark").css("transform", "translateX(98px) scale(.79)");
                $("#content-dark").css("transform", "translateX(105px) scale(1.3)");
                // Opacity
                $("#content1-dark").css("opacity", 0.6);
                $("#content-dark").css("opacity", 1);
                localStorage.setItem('flag', 2);
            } else if (localStorage.getItem('flag') == 2) {
                $("#content2-dark").css("z-index", "99");
                $("#content-dark").css("z-index", "9");
                $("#content1-dark").css("z-index", "9");
                $("#content-dark").css("transform", "translateX(206px) scale(1) ");
                $("#content2-dark").css("transform", "translateX(-101.5px) scale(1.3)");
                $("#content1-dark").css("transform", "translateX(-104px) scale(0.78) ");
                $("#content1-dark").css("margin-top", 42);
                localStorage.setItem('flag', 0);
                $("#content2-dark").css("opacity", 1);
                $("#content-dark").css("opacity", 0.6);
            }
        });

        $("#hover-left").click(function() {
            if (localStorage.getItem('flag') == 0) {
                $("#content2-dark").css("z-index", "9");
                $("#content-dark").css("z-index", "9");
                $("#content1-dark").css("z-index", "99");
                $("#content2-dark").css("transform", "translateX(0px) scale(1)");
                $("#content1-dark").css("transform", "translateX(0px) scale(1)");
                $("#content-dark").css("transform", "translateX(0px)");
                localStorage.setItem('flag', 1);
                $("#content1-dark").css("opacity", 1);
                $("#content-dark").css("opacity", 0.6);
            } else if (localStorage.getItem('flag') == 1) {
                $("#content-dark").css("z-index", "9");
                $("#content2-dark").css("z-index", "99");
                $("#content1-dark").css("z-index", "9");
                $("#content-dark").css("transform", "translateX(204px) scale(1)");
                $("#content2-dark").css("transform", "translateX(-103px) scale(1.3)");
                $("#content1-dark").css("transform", "translateX(-102px)  scale(.79)");
                $("#content1-dark").css("margin-top", 42);
                localStorage.setItem('flag', 2);
                $("#content2-dark").css("opacity", 1);
                $("#content1-dark").css("opacity", 0.6);
            } else if (localStorage.getItem('flag') == 2) {
                $("#content1-dark").css("z-index", "9");
                $("#content-dark").css("z-index", "99");
                $("#content2-dark").css("z-index", "9");
                $("#content1-dark").css("transform", "translateX(100px) scale(.8)");
                $("#content-dark").css("transform", "translateX(104px) scale(1.3)");
                $("#content2-dark").css("transform", "translateX(-206px)");
                localStorage.setItem('flag', 0);
                $("#content2-dark").css("opacity", 0.6);
                $("#content-dark").css("opacity", 1);
            }
        });

    }


});