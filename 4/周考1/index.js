// 功能1：
// 		（1）定义一个div，使用js设置获取id，然后设置宽100px高100px，
var div = document.getElementById("myDiv")
console.log(div)
div.style.height = "100px"
div.style.width = "100px"
// （2）设置div背景色为”#6f4”
div.style.background = "#6f4"
// （3）设置div内部节点为 “这是一段js创建出来段文本”（此节点需要用span包裹）
var html = "<span>这是一段js创建出来段文本</span>"
div.innerHTML = html

// 功能2：
// （1）定义一个i，一个b，一个em，和一个span标签，
// （2）i标签内部为‘56’，获取i内的值，使用变量i_num存储，并计算获取的值加上34的结果，存入span标签内

var i_num = document.getElementsByTagName("i")[0].innerHTML

var span = document.getElementsByTagName("span")[1]

span.innerHTML = i_num + 34


// （3）重新计算量i_num减去34，结果存入b标签
var b = document.getElementsByTagName("b")[0]
b.innerHTML = i_num - 34
// （4）标注计算结果的原因	（结果为何一个是 ‘5634’，一个是‘22’）
// "56" + 34 
// 当+加好运算符   其中一端是字符串的时候 进行拼接
// "56" - 34 
// 减号运算符  进行数字运算 不是数字的转化成数字
// （5）em标签内存放i_num与34相加为90的结果（）
var em = document.getElementsByTagName("em")[0]

em.innerHTML = Number(i_num) + 34