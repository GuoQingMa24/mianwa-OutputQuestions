//21. 输出是什么？
const sum = eval('10*10+5')
//这里使用了eval进行求值，所以它是一个表达式直接计算出来返回

//22. cool_secret 可访问多长时间？
sessionStorage.setItem('cool_secret', 123)
//用户关闭到标签页的时候就会没有，因为session只有在会话期间是有效的

//23. 输出是什么？
var num = 8
var num = 10

console.log(num)
//var中可以用相同的变量名定义，会存储最新的值

//24. 输出是什么？
const obj = { 1: 'a', 2: 'b', 3: 'c' }
const set = new Set([1, 2, 3, 4, 5])

obj.hasOwnProperty('1')
obj.hasOwnProperty(1)
set.has('1')
set.has(1)

//对象中所有的键都是字符串就算最后没有使用字符串定义
//集合中没有字符串1只有数字1

//25. 输出是什么？
const obj = { a: 'one', b: 'two', a: 'three' }
console.log(obj)

//如果出现相同的键 后面的值会替换前面的呢

//26. JavaScript 全局执行上下文为你做了两件事：全局对象和 this 关键字。

//基本执行上下文是全局执行上下文：它是代码中随处可访问的内容。

//27. 输出是什么？

for (let i = 1; i < 5; i++) {
    if (i === 3) continue
    console.log(i)
}
//1 2 4

//28. 输出是什么？
String.prototype.giveLydiaPizza = () => {
    return 'Just give Lydia pizza already!'
}

const name = 'Lydia'

name.giveLydiaPizza()

//这里是给整体的字符串对象添加了一个方法，所以这里直接就是使用这个方法返回正确的

//29. 输出是什么？

const a = {}
const b = { key: 'b' }
const c = { key: 'c' }

a[b] = 123
a[c] = 456

console.log(a[b])

//这里相当于给对象a设置属性为a["[object Object]"] = 456
//两个都是这么设置的，所以后面再进行使用的时候就是覆盖前面的值

//30. 输出是什么？
const foo = () => console.log('First')
const bar = () => setTimeout(() => console.log('Second'))
const baz = () => console.log('Third')

bar()
foo()
baz()
//setTimeout函数是先运行之后然后再调用它里面的函数