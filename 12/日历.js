var ul = document.getElementById("ul")
var span = document.getElementById("date")
var pre = document.getElementById("pre")
var next = document.getElementById("next")
var year, month, date //当前年月日
var day //获取当前月份第一天星期几
var lastDate //上月最后一天是几号
var lastDay //上个月最后一天星期几
var currDay //当前月最后一天



function renderLastDate() {
    var html = ''
    var last = lastDate - lastDay + 1
    for (var i = 1; i < day; i++) {
        html += `<li class="gray">${last++}</li>`
    }

    return html;
}


function renderCurrDate() {
    var html = ``
    for (var i = 1; i <= currDay; i++) {
        html += `<li>${i}</li>`
    }
    return html
}

function renderNextDate() {
    var html = ''
    for (var i = 1; i <= 42 - lastDay - currDay; i++) {
        html += `<li class="gray">${i}</li>`
    }
    return html
}


function getDate(a, b, c) {
    // 字符串拼接
    var html = ''
    var time = new Date(a, b, c)

    // 获取当前年月日星期
    year = time.getFullYear()
    month = time.getMonth()
    date = time.getDate()
    span.innerHTML = time.toLocaleDateString()
    // 获取当月最后一天
    currDay = new Date(year, month + 1, 0).getDate()
    // 获取当月第一天星期几
    day = new Date(year, month, 1).getDay()
    console.log(day)
    // 获取上个月最后一天是几号
    lastDate = new Date(year, month, 0).getDate()
    // 获取上个月最后一天星期几
    lastDay = new Date(year, month, 0).getDay()

    
    html += renderLastDate(day, lastDate, lastDay)
    html += renderCurrDate(currDay)
    html += renderNextDate(lastDay, currDay)
    ul.innerHTML = html
}

function addEvent() {
    pre.onclick = function () {
        month--
        getDate(year, month, date)
    }

    next.onclick = function () {
        month++
        getDate(year, month, date)
    }
}

addEvent()



getDate(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())