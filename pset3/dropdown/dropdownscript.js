$(document).ready(function () {

    var drop = $(".dropdown > a:first");
    var sub = $(".sub-menu");
    var subList = $(".sub-menu > li > a");

    drop.click(function () {
        subList.show();
        sub.stop(true, true).toggle();
    });

    subList.on("click", function () {
        subList.hide();
        var subListText = $(this).text();
        var mainText = $(".dropdown > a:first")
        mainText.text(subListText);
    });

    $(document).mouseup(function (e) {
        var container = sub;
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide();
        }
    });
});