// let name = 'Hassan Shabbir'
// console.log(name)

// const me = 'hassan'
// console.log(me)
// console.log(typeof name)

// const foo = null
// console.log(typeof foo)
// const bar = true
// let test;
// console.log(typeof test)

// const hobbies = ['movies', 'music'];
// console.log(typeof hobbies)

// let val
// val = (5).toString()
// val = String(new Date())
// val = Number('5')
// val = Number(false)
// val = Number(null)
// val = parseInt('100')
// val = parseFloat('100.30')



// console.log(val)
// console.log(typeof val)
// console.log(val.length)

// const val1 = 5
// const val2 = 6

// console.log(Math.PI)
// console.log(Math.round(2.4))
// console.log(Math.ceil(2.4))
// console.log(Math.floor(2.4))
// console.log(Math.sqrt(64))
// console.log(Math.abs(-3))
// console.log(Math.pow(8,2))
// console.log(Math.floor(Math.random() * 20 + 1))


// const firstName = 'hassan'
// const lastName = 'shabbir'
// console.log(firstName + ' ' + lastName)
// let val = firstName
// val += ' '
// val += lastName

// 'Hello, my name is ' + firstName + ' ' + lastName
// firstName.length
// firstName.concat(' ', lastName)
// firstName[2]
// firstName.indexOf('s')
// firstName.charAt('2')
// firstName.charAt(firstName.length - 1)
// firstName.substring(0,3)
// firstName.slice(0,3)
// firstName.slice(-3)
// console.log((firstName + ' ' + lastName).split(' '))
// firstName.replace('ha', 'hi')
// firstname.includes('has')

const name = 'Hassan'
const age = 30
const job = 'Web developer'
const city = 'Miami'
let html

html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: ' + job + ' </li><li>City: ' + city + '</li></ul>';

html = `<ul><li>Name: ${name}</li><li>Age: ${age}</li><li>Job: ${job}</li><li>City: ${city}</li></ul>`


document.body.innerHTML = html
console.log(html)
console.log()
