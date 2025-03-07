//11. 输出是什么？
function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

const member = new Person('Lydia', 'Hallie')
Person.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

console.log(member.getFullName())
//输出为TypeError
//我们无法像常规对象那样子直接添加方法而是使用prototype的原型的方式

//12. 输出是什么？

function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

const lydia = new Person('Lydia', 'Hallie')
const sarah = Person('Sarah', 'Smith')

console.log(lydia)
console.log(sarah)

//输出为Person {firstName: "Lydia", lastName: "Hallie"} and undefined
//1.使用new关键字创建的时候，this会应用到空的对象，如果没有new，就是全局的

//14. 所有对象都有原型

//这是错误的，因为除了基本对象

//15. 输出是什么？
function sum(a, b) {
    return a + b
}

sum(1, '2')

//相加字符串拼接

//16. 输出是什么？
let number = 0
console.log(number++)
console.log(++number)
console.log(number)

//0 2 2
//1++要在访问之后，++1在访问之前

//17. 输出是什么？
function getPersonInfo(one, two, three) {
    console.log(one)
    console.log(two)
    console.log(three)
}

const person = 'Lydia'
const age = 21

getPersonInfo`${person} is ${age} years old`

//["", " is ", " years old"] "Lydia" 21
//1.第一个变量是模板字符串，字符串里面的两个变量是第二第三个形参

//18. 输出是什么？
function checkAge(data) {
    if (data === { age: 18 }) {
        console.log('You are an adult!')
    } else if (data == { age: 18 }) {
        console.log('You are still an adult.')
    } else {
        console.log(`Hmm.. You don't have an age I guess`)
    }
}

checkAge({ age: 18 })
//由于两个数值看上去是正确的，但是他们的地址是不一样的

//19. 输出是什么？
function getAge(...args) {
    console.log(typeof args)
}

getAge(21)
//object，...args会返回实参组成的数组，而数组是对象，因此为object

//20. 输出是什么？
function getAge() {
    'use strict'
    age = 21
    console.log(age)
}

getAge()

//ReferenceError输出，因为它会抛出一个引用的错误，如果不适用这个就会停止工作，
//age会被添加到全局的对象中