// 功能1：
// (1)在HTML文件中添加一个ID名为test的div标签
// (2)声明title变量，并赋值为”<h2>Git分支</h2>”
var title = "<h2>Git分支</h2>"
// (3)声明content变量，并赋值为”<p>先我们需要了解一点
// ，Git 保存的数据不是文件的变化或者差异，而是一系列不同时刻的文件快照。</p>”
var content = "<p>先我们需要了解一点，Git 保存的数据不是文件的变化或者差异，而是一系列不同时刻的文件快照。</p>"
// (4)通过JS动态为该box添加内容,分别是title和content变量中存储的数据。
var div = document.getElementById("test")
div.innerHTML = title + content
// (5)通过JS设置box中的h2标签的字体大小20px，颜色为红色


var h2 = div.getElementsByTagName("h2")[0]
console.log(h2)
h2.style.fontSize = "20px"
h2.style.color = "red"


// (6)通过JS设置box中的p标签的字体大小12px，颜色为蓝色


var p = div.getElementsByTagName("p")[0]
p.style.fontSize = "12px"
p.style.color = "blue"


// 功能2：
// (1) 在HTML文件分别添加两个ID名为n1和n2的span标签，span的内容分别是10和100
// (2)通过JS获取到n1和n2的内容10和100分别存储到变量num1和num2中
// (3)将变量num1和num2有值拼接存入变量total中
// 将total的数据类型以弹出框的方式输出