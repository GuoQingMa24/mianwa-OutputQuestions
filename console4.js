//31. 当点击按钮时，event.target是什么？
<div onClick="console.log('first div')">
    <div onClick="console.log('second div')">
        <button onClick="console.log('button')">Click!</button>
    </div>
</div>

//正常输出button，可以通过event.stopPropagation 来停止冒泡。

//32. 当您单击该段落时，日志输出是什么？

<div onClick="console.log('div')">
    <p onClick="console.log('p')">Click here!</p>
</div>

//p div 当我们点击的时候 不仅触发捕获 而且触发 冒泡


//33. 输出是什么？
const person = { name: 'Lydia' }

function sayHi(age) {
    console.log(`${this.name} is ${age}`)
}

sayHi.call(person, 21)
sayHi.bind(person, 21)

//call将this指向person，bind不是立即执行的
//Lydia is 21 function


//34. 输出是什么？

function sayHi() {
    return (() => 0)()
}

typeof sayHi()

//这里是一个立即执行函数返回的值是0，所以这里应该是number

//35. 下面哪些值是 false?
0
new Number(0)('')(' ')
new Boolean(false)
undefined

//只有6中falsy值    undefined
//     null
//     NaN
//     0
//     '' (empty string)
//     false

//36. 输出是什么？
console.log(typeof typeof 1)

//typeof 1 返回 "number"。 typeof "number" 返回 "string"。

//37. 输出是什么？
const numbers = [1, 2, 3]
numbers[10] = 11
console.log(numbers)

//[1, 2, 3, 7 x empty, 11]，如果创建的数字超过了数组的索引中间会创建名字为empty slots的东西

//38. 输出是什么？
;(() => {
    let x, y
    try {
        throw new Error()
    } catch (x) {
        ;(x = 1), (y = 2)
        console.log(x)
    }
    console.log(x)
    console.log(y)
})()

//这段中x的作用域在catch中，因为x中的形参有x
//定义了y的值之后我们就可以直到y的值是为2，作用域为整个函数


//39. JavaScript 中的一切都是？

//基本类型与对象


//40. 输出是什么？
;[
    [0, 1],
    [2, 3]
].reduce(
    (acc, cur) => {
        return acc.concat(cur)
    },
    [1, 2]
)

//[1, 2]是初始值。初始值将会作为首次调用时第一个参数 acc 的值。在第一次执行时， acc 的值是 [1, 2]，
// cur 的值是 [0, 1]。合并它们，
// 结果为 [1, 2, 0, 1]。 第二次执行，
// acc 的值是 [1, 2, 0, 1]， cur 的值是 [2, 3]。
// 合并它们，最终结果为 [1, 2, 0, 1, 2, 3]