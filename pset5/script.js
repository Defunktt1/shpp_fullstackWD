const ONE_HOUR = 3600000;
lastMsgTimestamp = 0;

$(document).ready(function () {

    historyLoad();

    $("#message_submit_button").click(function (e) {
        e.preventDefault();
        var currentTime = new Date();
        $.post("chat_data.php", {ts: currentTime.getTime(), msg: $("#message").val()},
            function (data) {
                var key;
                var table = [];
                for (key in data) {
                    if (data[key].time > lastMsgTimestamp) {
                        table.push([(data[key].time), data[key].user, data[key].message]);
                    }
                }
                for (var i = 0; i < table.length; i++) {
                    if (i == table.length - 1) {
                        lastMsgTimestamp = table[i][0];
                    }
                    table[i][0] = '[' + getCurrentTime(table[i][0]) + ']';
                    table[i][1] = '<b>' + table[i][1] + '</b>' + ": ";
                    table[i] = table[i].join(" ") + '<br /><br />';
                }
                var chat = $(".chat-window");
                $("#message").val("");
                chat.append(table);
                chat.scrollTop(chat[0].scrollHeight);
            });
    });
});

function historyLoad() {
    $.post("chat_data.php", {}, function (data) {
        var currentTime = new Date();
        var key;
        var table = [];
        for (key in data) {
            if (currentTime.getTime() - data[key].time <= ONE_HOUR) {
                table.push([data[key].time, data[key].user, data[key].message]);
            }
        }
        for (var i = 0; i < table.length; i++) {
            if (i == table.length - 1) {
                lastMsgTimestamp = table[i][0];
            }
            table[i][0] = '[' + getCurrentTime(table[i][0]) + ']';
            table[i][1] = '<b>' + table[i][1] + '</b>' + ": ";
            table[i] = table[i].join(" ") + '<br><br>';
        }

        if (lastMsgTimestamp == 0) {
            lastMsgTimestamp = currentTime.getTime();
        }
        var chat = $(".chat-window");
        chat.html(table);
        chat.scrollTop(chat[0].scrollHeight);
    });
}

function getCurrentTime(localTime) {
    var currentTime = new Date();
    var localOffset = currentTime.getTimezoneOffset() * 60000;
    var utc = parseInt(localTime) + localOffset;
    var offset = 3;
    var kievTime = utc + (3600000 * offset);
    var resultDate = new Date(kievTime);
    var hours = resultDate.getHours();
    var minutes = resultDate.getMinutes();
    var seconds = resultDate.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ':' + minutes + ':' + seconds;
}

