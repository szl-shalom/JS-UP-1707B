// 什么是变量
// 是存储单个可变信息的容器

// var 变量名称
// 变量提升的效果

// 标识符：变量 | 函数名称 | 函数参数 |
// 必须以字母 _ $开头  不能以数字
// 区分字母大小写
// 一般使用驼峰式命名规则
// 不能使用关键字，保留字

// 什么是数据类型


// 五大基本数据类型 

// 数字 number
// 特殊的数字  NaN  not a number
// 和NaN进行算数的结果都是NaN

// 转型函数 Number()
// console.log(Number(a))
// console.log(Number(b))
// console.log(Number(c))
// console.log(Number(d))
// console.log(Number(e))

// 从左到右匹配到第一个非数字结束 返回之前匹配到数字 如果没有匹配数字 返回NaN


// console.log(parseInt(a))
// console.log(parseInt(b))
// console.log(parseInt(c))
// console.log(parseInt(d))
// console.log(parseInt(e))



// 从左到右匹配到第一个非数字结束 返回之前匹配到数字 如果没有匹配数字 返回NaN  能匹配到第一个小数点
// parseFloat()

// console.log(parseFloat())
// console.log(parseFloat(b))
// console.log(parseFloat(c))
// console.log(parseFloat(d))
// console.log(parseFloat(e))


// var flag = isNaN(true)
// console.log(flag)


// 字符串 string
// var a = "123a"
// var b = true
// var c = false
// var d = null
// var e

// var str = String(b)
// console.log(typeof str)

// var str1 = undefined.toString()
// console.log(str1)

// console.log(null)
// var str = "123"
// document.write("str")

// 布尔 boolean
//  六个转布尔为假的值
//  ""  false  null undefined NaN  0
// true
// false

var flag = Boolean("0")
console.log(flag)
// 空指针对象 null


// 未定义 undefined  

var un;