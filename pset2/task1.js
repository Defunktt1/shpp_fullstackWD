/**
 * Created by Vladyslav on 3/8/17.
 */

function $(id) {
    return document.getElementById(id);
}

function printResult(target, result) {
    target.innerHTML = result;
}

//--------------------------------------------------

function task1_2(start, end, filter) {
    var result = 0;
    for (var i = start; i <= end; i++) {
        if (!filter || filter(i)) {
            result += i;
        }
    }
    return result;
}

printResult($('task1'), task1_2(-1000, 1000));

function endsWith237(i) {
    i = Math.abs(i);
    return i % 10 == 2 || i % 10 == 3 || i % 10 == 7;
}

printResult($('task2'), task1_2(-1000, 1000, endsWith237));

//------------------------------------------------

function task3(height) {
    var result = '';
    for (var i = 0; i < height; i++) {
        for (var j = 0; j < i + 1; j++) {
            result += '*';
        }
        result += '\n';
    }

    return result;
}

printResult($('task3'), task3(50));

//------------------------------------------------

function task4(seconds) {
    seconds = Math.abs(Number(seconds));
    var hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    var minutes = Math.floor(seconds / 60);
    seconds %= 60;

    return [hours, minutes, seconds]
        .map(function (time) {
            return time < 10 ? ('0' + time) : time;
        })
        .join(':');
}

//------------------------------------------------

function task5(age) {
    age = Math.abs(Number(age));

    var lastTwoDigits = age % 100;
    var lastDigit = age % 10;

    if (
        lastDigit === 0 || // 0, 10, 20, 30
        lastDigit > 4 || // 5..9, 15..19
        (lastTwoDigits > 10 && lastTwoDigits < 15) // 11..14, 111..114
    ) {
        return age + ' лет';
    }

    return age + ' год' + (lastDigit !== 1 ? 'a' : '');
}

//---------------------------------------------------

function task6(firstDate, secondDate) {
    var date1 = new Date();
    var date2 = new Date();
    date1.setTime(Date.parse(firstDate));
    date2.setTime(Date.parse(secondDate));

    if (date1 > date2) {
        return "Wrong input. Your second date is less than the first"
    }
    var interval = date2 - date1;
    var seconds = interval / 1000;
    var secondsInOneDay = 86400;
    var years = Math.floor(seconds / secondsInOneDay / 365);
    seconds %= secondsInOneDay * 365;
    var months = Math.floor(seconds / secondsInOneDay / 30);
    seconds %= secondsInOneDay * 30;
    var days = Math.floor(seconds / secondsInOneDay);
    seconds %= secondsInOneDay;
    var hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    var minutes = Math.floor(seconds / 60);
    seconds %= 60;
    var result = [years, months, days, hours, minutes, seconds];

    return "Между датами прошло " + task5(years) + " " + months + " месяц(ев), " + days +
        " дней, " + hours + " часов, " + minutes + " минут(ы), " + seconds + " секунд(ы).";
}
//---------------------------------------------------

function task7(date) {
    var dateArr = new Date();
    dateArr.setTime(Date.parse(date));
    var day = dateArr.getDate();
    var month = dateArr.getMonth();
    var zodiac = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer',
        'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
    var lastDay = ['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];

    var pictures = [
        '<br><br><img src="zodiac/capricorn.png" alt="capricorn">',
        '<br><br><img src="zodiac/aquarius.png" alt="aquarius">',
        '<br><br><img src="zodiac/pisces.png" alt="pisces">',
        '<br><br><img src="zodiac/aries.png" alt="aries">',
        '<br><br><img src="zodiac/taurus.png" alt="taurus">',
        '<br><br><img src="zodiac/gemini.png" alt="gemini">',
        '<br><br><img src="zodiac/cancer.png" alt="cancer">',
        '<br><br><img src="zodiac/leo.png" alt="leo">',
        '<br><br><img src="zodiac/virgo.png" alt="virgo">',
        '<br><br><img src="zodiac/libra.png" alt="libra">',
        '<br><br><img src="zodiac/scorpio.png" alt="scorpio">',
        '<br><br><img src="zodiac/sagittarius.png" alt="sagittarius">',
        '<br><br><img src="zodiac/capricorn.png" alt="capricorn">'
    ];

    return (day > lastDay[month]) ? (zodiac[month + 1] + pictures[month]) : (zodiac[month] + pictures[month]);
}

//---------------------------------------------------

function task8(firstDimension, secondDimension) {
    firstDimension = Number(firstDimension);
    secondDimension = Number(secondDimension);
    console.log(firstDimension);
    console.log(secondDimension);
    var elements = "<table border='1'>";

    for (var i = 1; i <= firstDimension; i++) {
        elements += "<tr>";
        for (var j = 1; j <= secondDimension; j++) {
            if ((i + j) % 2 != 0) {
                elements += "<td bgcolor='white' width='20' height='20'></td>";
            } else {
                elements += "<td bgcolor='black' width='20' height='20'></td>";
            }
        }
        elements += "</tr>";
    }
    elements += "</table>";
    console.log(elements);
    return elements;
}

//---------------------------------------------------

function task9(entrances, floors, apartmentsPerFloor, apartment) {
    entrances = Number(entrances);
    floors = Number(floors);
    apartmentsPerFloor = Number(apartmentsPerFloor);
    apartment = Number(apartment);

    var floor = Math.ceil(apartment / apartmentsPerFloor);
    var entrance = Math.ceil(floor / floors);
    floor -= (entrance - 1) * floors;

    if (apartment < 1 || entrance > entrances || entrance < 1 || floors < 1 || apartmentsPerFloor < 1) {
        return "Wrong Input! Please, try again";
    }

    return "Floor = " + floor + " entrance = " + entrance;
}

//---------------------------------------------------

function task10(number) {
    var result = 0;
    var numLength = number.length;
    number = Number(Math.abs(number));
    for (var i = 0; i < numLength; i++) {
        result += number % 10;
        number = Math.floor(number / 10);
    }

    return result;
}

//-----------------------------------------------------

function task11(inputData) {
    var input = document.getElementById("inputData").value;
    var links = input.split(',');
    var linksArrayLength = links.length;

    for (var i in links) {
        links[i] = links[i].replace(/^https?\:\/\//i, "");
        links[i] = links[i].replace(/^ https?\:\/\//i, ""); // if user put the space symbol before 'http...'

    }
    links = links.sort();

    var linkList = "<ul>";
    for (var j = 0; j < linksArrayLength; j++) {
        linkList += "<li>" + links[j] + "</li>";
    }
    linkList += "</ul>";
    document.getElementById("task11").innerHTML = linkList;
}