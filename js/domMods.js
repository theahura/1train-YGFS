$( document ).ready(function() {
    $("#about-us, #sources").click( function () {
        $(this).css("color", "#BA1200");
        if ($(this).attr("id") == "sources") {
            $("#about-us").css("color", "#000");
            $("#about-us-box").hide();
            $("#sources-box").show();
        }
        else {
            $("#sources").css("color", "#000");
            $("#sources-box").hide();
            $("#about-us-box").show();
        }
    });

    $('.info-link').click( function () {

        svgStyling();
        bodyStyling();
        $('.info-box').toggle();

        return false;
    });
});

$(document).click(function(e) { 
    if ($('.info-box').css('display') != "none" && e.target != $('.info-box')[0] && !$('.info-box').find(e.target).length) {
        svgStyling();
        bodyStyling()
        $('.info-box').hide();
    }
});

function svgStyling() {
    var svgDOM = $(".main")

    if (svgDOM.css("position") == "absolute") {
        svgDOM.css("position", "static");
        svgDOM.css("z-index", 1);
        $('.info-box').css("z-index", -1);
    }
    else {
        svgDOM.css("position", "absolute");
        svgDOM.css("z-index", -1);
        $('.info-box').css("z-index", 1);
    }
}

function bodyStyling() {
    var boxDOM = $(".info-box");

    $("body").children()
        .css("opacity", function (d) {
            if (boxDOM.css("display") != "none") {

                if ($(this).attr("class") == "info-box") {
                    return 0;
                }

                if ($(this).css("opacity") == "0") {
                    return 0;
                }
                else {
                    return 1                
                }
            }
            else {

                if ($(this).attr("class") == "info-box") {
                    return 1;
                }

                if ($(this).css("opacity") == "0") {
                    return 0;
                }
                else {
                    return 0.5                
                }
            }
        });
}