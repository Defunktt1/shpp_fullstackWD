lastId = 0;

$(document).ready(function () {

    setInterval(updateMsg, 1000);

    $("#message_submit_button").click(function (e) {
        e.preventDefault();
        var message = $("#message");
        $.post( "saveMessage.php", {msg: message.val()});
        message.val("");
    });
});

function updateMsg() {
    $.post("chat_data.php", {id: lastId}, function (data) {
        var table = [];
        for (var key in data) {
            table.push([data[key].time, data[key].user_name, data[key].message_text]);
            lastId = parseInt(data[key].message_id);
        }

        for (var i = 0; i < table.length; i++) {
            table[i][0] = '[' + table[i][0] + ']';
            table[i][1] = '<b>' + table[i][1] + '</b>' + ": ";
            table[i] = table[i].join(" ") + '<br /><br />';
            table[i] = table[i].replace(":)", "&#9786");
            table[i] = table[i].replace(":(", "&#9785");
        }

        var chat = $(".chat-window");
        chat.append(table);
    });
}
