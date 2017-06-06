$( document ).ready(function() {

    $("#text-button").click(function() {
        var showInfoButton = $("#show-info");
        if (showInfoButton.is(':hidden') ){
            showInfoButton.show(750);
            $(this).html("Скрыть информацию");
        }else{
            showInfoButton.hide(750);
            $(this).html("Показать информацию");
        }

    })

    var showWindow = $("#show-window");

    showWindow.click(function () {
        var AllWindow = $("#all-window"),
            windowElement = $("#window");

        AllWindow.slideDown("slow");
        windowElement.slideDown("slow");
        AllWindow.css("display","flex");
    })

    var windowInExit = $("#window #exit");

    windowInExit.click(function(){

        var AllWindow = $("#all-window"),
            windowElement = $("#window");

        windowElement.slideUp( "slow" );
        AllWindow.slideUp( "slow" );

    })
});