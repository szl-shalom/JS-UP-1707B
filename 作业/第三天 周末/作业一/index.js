// 功能1：
// 		（1）定义一个str变量并赋值为‘hello js’
var str = "heelo.js"
// console.log(str)
// 		（2）获取id为box的元素，并且把str变量的数据类型放到box元素内
var box = document.getElementById("box")
box.innerHTML = typeof str
// console.log(box.innerHTML)
// 		（3）js设置box元素的背景色为#eee，	字体大小为20px
box.style.background = "#eee"
box.style.fontSize = "20px"
// console.log(box.style.background)
// console.log(box.style.fontSize)
// 		（4）需要有测试的过程
// 功能2：
// （1）定义5个变量，分别存字符串，数字，布尔，null和undefined
var a = "123",
    b = 1,
    c = true,
    d = null,
    e
// （2）分别测试其数据类型
console.log(typeof (a))
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
// （3）最终以‘xxxx的数据类型是xxxx’的形式放到id为results下对应的span标签内	
 var div = document.getElementById("results")
 var spans = div.getElementsByTagName("span")
 console.log(spans[0])
// "xxxx的数据类型是xxxx"
 spans[0].innerHTML = a + "的数据类型是" + typeof a
 spans[1].innerHTML = b + "的数据类型是" + typeof b
 spans[2].innerHTML = c + "的数据类型是" + typeof c

 spans[3].innerHTML = d + "的数据类型是" + typeof d
 spans[4].innerHTML = e + "的数据类型是" + typeof e