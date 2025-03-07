//41. 输出是什么？
!!null
!!''
!!1

//null false !! = false
//'' false !!=false
//1 true !! = true

//42. setInterval 方法的返回值是什么？

//setInterval 返回一个唯一的 id。此 id 可被用于 clearInterval 函数来取消定时

//43. 输出是什么？
;[...'Lydia']

//string 类型是可迭代的。扩展运算符将迭代的每个字符映射成一个元素。

//44. 输出是什么?
function* generator(i) {
    yield i
    yield i * 2
}

const gen = generator(10)

console.log(gen.next().value)
console.log(gen.next().value)

//10 20 next会继续 yied会停下来

//45. 返回值是什么?
const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, 'one')
})

const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 100, 'two')
})

Promise.race([firstPromise, secondPromise]).then((res) => console.log(res))

//race方法返回第一个完成的Promise所以直接选two

//46. 输出是什么?
let person = { name: 'Lydia' }

const members = [person]
//members = [{name: 'Lydia'},]
person = null

console.log(members)

//数组需修改不是同一个地址


// 47. 输出是什么?
const person = {
    name: 'Lydia',
    age: 21
}

for (const item in person) {
    console.log(item)
}

//for in 之便利里面的键


//48. 输出是什么?
console.log(3 + 4 + '5')

//‘75’

//49. num的值是什么?
const num = parseInt('7*6', 10)

//parseInt是检查字符串中的字符是否合法，遇到7之后后面不是数字直接停下来返回


//50. 输出是什么?
;[1, 2, 3].map((num) => {
    if (typeof num === 'number') return
    return num * 2
})
//if中判断都是true直接返回，map就会将结果组成一个新的数组
//没有内容就直接返回unified所以为三个undefined