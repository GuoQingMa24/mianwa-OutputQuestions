//51. 输出的是什么?

function getInfo(member, year) {
    member.name = 'Lydia'
    year = '1998'
}

const person = { name: 'Sarah' }
const birthYear = '1997'

getInfo(person, birthYear)

console.log(person, birthYear)

//输出为 Lydia ，1997 因为对象传值的方式是引用，就是引用同一个地址的值
//当发生改变之后他们的地址是相同的所以会被修改
//但是如果传入值这个引用的地址是不一样的所以不会修改

//52. 输出是什么?
function greeting() {
    throw 'Hello world!'
}

function sayHi() {
    try {
        const data = greeting()
        console.log('It worked!', data)
    } catch (e) {
        console.log('Oh no an error!', e)
    }
}

sayHi()

//输出为"Oh no an error: Hello world!，由于这段代码中，throw可以自定义抛出的语句
//所以我们可以创建自定义的错误，通过它我们就可以抛出异常


//53. 输出是什么?
function Car() {
    this.make = 'Lamborghini'
    return { make: 'Maserati' }
}

const myCar = new Car()
console.log(myCar.make)

//"Maserati"，返回的值和属性的值是不一样的，属性的值和返回的值是相同的，而不是构造函数中设定的值

//54. 输出是什么?
;(() => {
    let x = (y = 10)
})()

console.log(typeof x)
console.log(typeof y)

//undefined number，定义y=10,相当于是给全局的对象y=10
//但是这里使用let就是说明作用域是块级的导致只能是undefined

//55. 输出是什么?
class Dog {
    constructor(name) {
        this.name = name
    }
}

Dog.prototype.bark = function () {
    console.log(`Woof I am ${this.name}`)
}



const pet = new Dog('Mara')

pet.bark()

delete Dog.prototype.bark

pet.bark()
// "Woof I am Mara" TypeError，在原型中的属性删除了之后
//那么就没有这个数据


//56. 输出是什么?
const set = new Set([1, 1, 2, 3, 4])

console.log(set)

//set是一个独一无二的集合，所以说会返回{1，2，3，4}

//57. 输出是什么?

// counter.js
let counter = 10
export default counter
// index.js
import myCounter from './counter'

myCounter += 1

console.log(myCounter)

//使用default导出之后这个值是只读的，所以会返回Error

//58. 输出是什么?
const name = 'Lydia'
age = 21

console.log(delete name)
console.log(delete age)

//使用const，let，var声明的变量无法被delete删除
//age属性赋值给了全局

//59. 输出是什么?
const numbers = [1, 2, 3, 4, 5]
const [y] = numbers

console.log(y)

//这里相当于是一个解构赋值，这里的y代表数组的第一个元素

//60. 输出是什么?
const user = { name: 'Lydia', age: 21 }
const admin = { admin: true, ...user }

console.log(admin)

//结构之后直接将对象中的键值对复制进去
//{ admin: true, name: "Lydia", age: 21 }
