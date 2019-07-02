# 第1题
封装三个函数，完成几个 DOM 元素类名操作的工具方法：

```
addClass(dom, name)：给 dom 元素添加类名 name
removeClass(dom, name)：把 dom 元素的类名 name 删除
hasClass(dom, name)：判断 dom 元素是否有类名 name
```


# 第2题
封装一个函数可以使得2维数组转换为1维数组并输出这个1维数组


#  第3题
实现一个评星方法
说明
* 可根据传入的评分和总数，返回评星结果（用 ★ 和 ☆ 描述）
* 评分必选项，四舍五入，总数可选，大于0的整数，默认为5
* 对于评分为空或小于0、评分大于总数、总数小于0或总数非整数的情况，返回'errror'
示例
```
getRate(4); // ★★★★☆
getRate(4, 8); // ★★★★☆☆☆☆
getRate(3.4); //  ★★★☆☆
getRate(5, 2); // 'error'
getRate(-2); // 'error'
getRate(3, 5.5); // 'error'
```