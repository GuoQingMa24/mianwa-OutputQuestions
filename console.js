//1.输出是什么
function sayHi() {
    console.log(name)
    console.log(age)
    var name = 'Lydia'
    let age = 21
}

sayHi()

//此题主要涉及变量提升，输出为undifind和referenceError
//var虽然声明了变量可是在到变量声明之前所有的值都会是undifined
//let和const也会出现变量提升，但是他们不会被初始化所以无法访问


//2.输出是什么
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1)
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1)
}

//3 3 3 0 1 2
//1.由于是遍历setTimeout会在遍历结束之后执行
//2.var声明变量在全局作用域，所以遍历过程中都会递增
//3.第二个遍历中使用let定义的，拥有块级作用域，每次遍历都是一个新值，并且每个值都在循环内的作用域

//3.输出是什么
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2
    },
    perimeter: () => 2 * Math.PI * this.radius
}

shape.diameter()
shape.perimeter()

//1.第一个this是普通函数，它的作用域就是当前这个对象所以能够拿到10
//2.第二个函数是箭头函数，它的this来源于继承（window），目前看来是没有这个值，所以为undifined，计算之后就是NaN

//4.输出是什么
;+true
!'Lydia'

//1.相加会转化为数字，所以true为1
//2.后面是lydia是一个真值，使用！后取反为false


//5.哪一个是无效的？
const bird = {
    size: 'small'
}

const mouse = {
    name: 'Mickey',
    small: true
}
A: mouse.bird.size
B: mouse[bird.size]
C: mouse[bird["size"]]

//1.bird.size取到size=small这个属性，所以mouse.small=true这是有效的
//2.但是使用. 这个mouse中没有这个属性 所以无效选择A

//6. 输出是什么？
let c = { greeting: 'Hey!' }
let d

d = c
c.greeting = 'Hello'
console.log(d.greeting)

//这里输出为Hello，因为当对象赋值的时候，两个对象引用的是一个地址空间，所以当其中一个发生了变化实际上
//源地址的对象发生了变化所以这里就是hello


//7. 输出是什么？
let a = 3
let b = new Number(3)
let c = 3

console.log(a == b)
console.log(a === b)
console.log(b === c)

//1.==不会判断两个值的属性和方法所以为true
//2.由于a和b虽然都是数字，但是B上面挂在了一些方法和原型是一个对象所以是不同的类型false
//3.同理

//8. 输出是什么？
class Chameleon {
    static colorChange(newColor) {
        this.newColor = newColor
        return this.newColor
    }

    constructor({ newColor = 'green' } = {}) {
        this.newColor = newColor
    }
}

const freddie = new Chameleon({ newColor: 'purple' })
freddie.colorChange('orange')

//1.输出为TypeError，由于colorChange是一个静态的方法，他不能通过实例来传值，所以抛出错误

//9. 输出是什么？
let greeting
greetign = {} // Typo!
console.log(greetign)

//输出为{},JS解释器实际上会输出window.greetign

//10. 当我们这么做时，会发生什么？
function bark() {
    console.log('Woof!')
}

bark.animal = 'dog'

//这是成长运行的因为函数在JS中是一个对象，所以代码其实不是一个实际的函数，而是一个拥有属性的对象。