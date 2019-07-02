/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-05-23 11:14:58
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-05-24 10:08:28
 */



/**
 * @description:  这是一个是
 * @param 
 * @return: 
 */

 
function fn() {
    // 日历
    var time = new Date()

    var leftBottom = document.getElementById("left-bottom")
    // 获取年月日
    var year = time.getFullYear()
    var month = time.getMonth()
    var date = time.getDate()

    // 获取本月最后一天几号
    var currDate = new Date(year, month + 1, 0).getDate()
    // 获取上个月最后一天
    var lastDate = new Date(year, month, 0).getDate()
    // 获取上个月最后一天星期几
    var lastDay = new Date(year, month, 0).getDay()
    // 日历开头第一天
    var dd = lastDate - lastDay + 1

    var html = ""
    // 拼接上月
    for (var i = 1; i <= lastDay; i++) {
        html += `<li>${dd++}</li>`
    }
    // 拼接当月
    for (var i = 1; i <= currDate; i++) {
        html += `<li>${i}</li>`

    }
    // 拼接下月
    for (var i = 1; i <= 42 - lastDay - currDate; i++) {
        html += `<li>${i}</li>`
    }
    leftBottom.innerHTML = html
}

fn()