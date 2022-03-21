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

//html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: ' + job + ' </li><li>City: ' + city + '</li></ul>';

//html = `<ul><li>Name: ${name}</li><li>Age: ${age}</li><li>Job: ${job}</li><li>City: ${city}</li></ul>`
//
//
//document.body.innerHTML = html
//console.log(html)
//console.log()
//console.clear()
//console.warn('warning')
//console.error('an error occurred')
//const sym = Symbol()
//console.log(typeof sym)

// date months are 0-based
//console.log(new Date('9/10/12'))
//let today = new Date()
//today.getDate()
//today.setDate(12)

//const id = 100
//if (id == 100) {
	//console.log('hi')
//} else {
	//console.log('bye')
//}
//if (id === 100) { // value and type the same
	//console.log('hi')
//} else {
	//console.log('bye')
//}

//if (typeof id === 'undefined') {} // use this when var is undefined

// && and
// || or

//const color = 'red'
//switch (color) {
	//case 'red':
		//console.log('Red')
		//break
//}

//function greet(firstName = 'John') { // default 'John'
//	return 'Hello ' + firstName
//}
//console.log(greet())

//const square = function(x)  {
//	return x * x
//}

//(function () {
//	console.log('IIFE') // immediately invokable function expressions
//}())

//const todo = {
//	add: function() {
//		console.log('Add todo')
//	}
//}
//todo.add()
//todo.delete = function() {
//	console.log('delete todo')
//}

//for (let i = 0; i < 10; i++) {
//	console.log('Number: ' + i)
//	// continue // skip to next iteration
//	// break // jump out of iteration
//}

//const cars = ['Ford', 'Chevy', 'Honda', 'Toyota']
//cars.forEach(function(car){
//	console.log(car)
//})

//const users = [ {id: 1}, {id: 2}, {id: 3} ]
//console.log(users.map(function(user) { return user.id }))

//const user = {
//	firstName: 'John',
//	lastName: 'Doe',
//	age: 40
//}
//for (let x in user) {
//	console.log(user[x])
//}

//alert('hi')
//prompt()
//confirm('are you sure')

//window.outerHeight
//window.location //hostname, port, protocol, reload, querystrings
//window.location.href = 'http://google.com'
//window.history.go(-1) // go back once in history
//window.navigator // more info about the browser

// DOM
//document
//a = [1,2,3]
//a.map((item,index,array) => array[index] = item * 20)
//console.log(a)

// can do document.htmlelement
//document.forms
//document.links[0].className // remember it is className not class
//document.links[0].classList // remember it is className not class
//document.scripts[2].getAttribute('src')

//let scriptsArr = Array.from(document.scripts)
//script.forEach(function(script) {
//	console.log(script)
//})

//search dom
//taskTitle = document.getElementById('task-title')
//document.getElementById('task-title').style.background = '#333'
//document.getElementById('task-title').textContent = 'Task List'
//document.getElementById('task-title').innerText = 'My List'
//document.getElementById('task-title').innerHTML = '<span style="color:red">My List</span>'
//document.querySelector('#task-title')
//document.querySelector('h5')
//document.querySelectorAll('.card-title')
//document.getElementsByClassName('collection-item')
//document.querySelector('ul').getElementByClassName('collection-item')
//document.getElementsByTagName('h3')
//document.querySelector returns a nodelist which includes .forEach() method without conversion to Array.from(selector)
//document.querySelectorAll('ul.collection li.collection-item').forEach(function(item, index) {
//	item.textContent = `${index}: Hello`
//})
//const liEven = document.querySelectorAll('li:nth-child(even')
//for (let i = 0; i < liEven.length; i++) {
//	liEven[i].style.background = '#f4f4f4'
//}
// never use childNodes or (first/last)Child
//document.querySelector('ul.collection').children
//document.querySelector('ul.collection').firstElementChild
//document.querySelector('ul.collection').nextElementSibling

//const li = document.createElement('li')
//li.className = 'collection-item'
//li.id = 'new-item'
//li.setAttribute('title', 'New Item')
//li.appendChild(document.createTextode('Hello World'))
//document.querySelector('ul.collection').appendChild(li)

//const link = document.createElement('a')
//link.className = 'delete-item secondary-content'
//link.innerHTML = '<i class="fa fa-remove"></i>'

//elem.replaceChild(newElem, oldElem)
//elem.remove()
//elem.classList.add('test')
//elem.classList.remove('test')
//elem.getAttribute('href')
//elem.setAttribute('href', 'http://google.com')
//elem.hasAttribute('title')
//elem.removeAttribute('href')

//elem.addEventListener('click', function() { ... }) //... for body elided
//elem.addEventListener('click', onClick) //... for body elided
//function onClick(e) {
//	e.type
//	e.timeStamp
//	e.clientX // window origin
//	e.offsetX // button origin
//	console.log('clicked')
//}
//elem.addEventListener('click', function(e) { e.preventDefault() }) // type can also be: dblclick, mousedown, mouseup, mouseover, mouseout, mousemove, keypress, focus, blur, cut, paste, input

// event bubbling: events fired for children also fire for parents that have the same event type
//document.querySelector('.card-title').addEventListener('click', function() {
//	console.log('card title')
//})
//document.querySelector('.card-content').addEventListener('click', function() {
//	console.log('card content')
//})

// attach events to multiple elements by looping
//const delItems = document.querySelectorAll('.delete-item')
//delItems.forEach(x => {
//	x.addEventListener('click', deleteItem)
//})
//function deleteItem(e) {
//	console.log('delete item')
//	console.log(e)
//}
// event delegation: (event attached to parent passed to children)
//document.body.addEventListener('click', deleteItem)
//function deleteItem(e) {
//	if (e.target.parentElement.classList.contains('delete-item')) {
//		console.log('delete item')
//		e.target.parentElement.parentElement.remove()
//	}
//}

//sessionStorage.setItem('name', 'Hassan Shabbir')
//localStorage.setItem('name', 'Hassan')
//console.log(localStorage.getItem('name'))
//localStorage.removeItem('name')

// document.querySelector('form').addEventListener('submit', function(e) {
// 	const task = document.getElementById('task').value
// 	let tasks

// 	if (localStorage.getItem('tasks') === null) {
// 		tasks = []
// 	} else {
// 		tasks = JSON.parse(localStorage.getItem('tasks'))
// 	}

// 	tasks.push(task)
// 	localStorage.setItem('tasks', JSON.stringify(tasks))
// 	alert('Task Saved')
// 	e.preventDefault()
// })

// const tasks = JSON.parse(localStorage.getItem('tasks'))
// tasks.forEach(function(task) {
// 	console.log(task)
// })

// objects
// function Person(firstName, lastName, dob) {
// 	this.firstName = firstName
// 	this.lastName = lastName
// 	this.birthday = new Date(dob)
// 	this.calculateAge = function() {
// 		const diff = Date.now() - this.birthday.getTime()
// 		const ageDate = new Date(diff)
// 		return Math.abs(ageDate.getUTCFullYear() - 1970)
// 	}
// }
// const brad = new Person('Brad', '9-10-1981')
// Person.prototype.getFullName = function() { // add function that remains the same between all objects
// 	return `${this.firstName} ${this.lastName}`
// }

// function Person(firstName, lastName) {
// 	this.firstName = firstName
// 	this.lastName = lastName
// }
// Person.prototype.greeting = function() {
// 	return `Hello there ${this.firstName} ${this.lastName}`
// }
// function Customer(firstName, lastName, phone, membership) {
// 	Person.call(this, firstName, lastName)
// 	this.phone = phone
// 	this.membership = membership
// }
// Customer.prototype = Object.create(Person.prototype)
// Customer.prototype.constructor = Customer
// const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard')
// console.log(customer1.greeting())

// const bool1 = true
// const bool2 = new Boolean(true)
// bool2.foo = 'hi'

// const personPrototypes = {
// 	greeting: function() {
// 		return `Hello there ${this.firstName} ${this.lastName}`
// 	}
// }
// const mary = Object.create(personPrototypes)
// mary.firstName = 'Mary'
// mary.lastName = 'Williams'
// mary.age = 30
// const brad = Object.create(personPrototypes, {
// 	firstName: {value: 'Hassan'},
// 	lastName: {value: 'Shabbir'},
// 	age: {value: 25}
// })

// class Person {
// 	constructor(firstName, lastName) {
// 		this.firstName = firstName
// 		this.lastName = lastName
// 	}
// 	greeting() {
// 		return `Hello there ${this.firstName} ${this.lastName}`
// 	}
// 	static addNumbers(x, y) {
// 		return x + y
// 	}
// }
// const mary = new Person('Mary', 'Williams')
// Person.addNumbers(1, 2)
// subclass ie inheritance
// class Customer extends Person {
// 	constructor(firstName, lastName, phone, membership) {
// 		super(firstName, lastName)
// 		this.phone = phone
// 		this.membership = membership
// 	}
// }
// const john = new Customer('John', 'Doe', '555-555-5555', 'Standard')

//// get external/api data
//document.getElementById('button').addEventListener('click', loadData)
//function loadData() {
//	const xhr = new XMLHttpRequest()
//	xhr.open('GET', 'data.txt', true) //3rd true if async
//	//or xhr.open('GET', 'http://foo.com/api/', true) //3rd true if async
//	xhr.onload = function() {
//		if (this.status === 200) {
//			console.log(this.responseText)
//		}
//	}
//	xhr.onerror = function() {
//		console.log('Request error')
//	}
//	xhr.send()
//}

// API: application programming interface
// REST: representational state transfer, stateless usually on HTTP
// HTTP requests: put, get, put, delete

// // promises
// // original
// function createPost(post, callback) { 
// 	setTimeout(function() {
// 		posts.push(post)
// 		callback()
// 	}, 2000)
// }
// createPost({title:'Post three'}, getPosts)
// // new
// function createPost(post) { 
// 	return new Promise(function(resolve, reject) {
// 		setTimeout(function() {
// 			posts.push(post)
// 			const error = true
// 			if (!error){
// 				resolve()
// 			} else {
// 				reject('Error: Something\'s wrong')
// 			}
// 		}, 2000)
// 	})
// }
// createPost({title:'Post three'})
// 	.then(getPosts)
// 	.catch(function(err) {
// 		console.log(err)
// 	})

// // fetch api
// fetch('test.txt') // or test.json or url
// 	.then(function(res) {
// 		return res.text() // or res.json()
// 	})
// 	.then(function(data) {
// 		console.log(data)
// 	})
// 	.catch(function(err) {
// 		console.log(err)
// 	})

// // arrow functions
// const sayHello = () => console.log('hi')
// const hello = () => 'Hello'
// const objLiteral = () => ({msg: 'Hello'})
// const greet = name => console.log(`Hello ${greet}`)
// const greet = (fn,ln) => console.log(`Hello ${fn} ${ln}`)
// const users = ['a','b','c']
// users.map(name => name.length)

// // make http post request
// post(url, data) {
// 	return new Promise((resolve, reject) => {
// 		fetch(url, {
// 			method: 'POST',
// 			headers: {
// 				'Content-type': 'application/json'
// 			},
// 			body: JSON.stringify(data)
// 		}).then(res => res.json())
// 			.then(data => resolve(data))
// 			.catch(err => reject(err))
// 	})
// }

// // async/await
// async function myFunc() {
// 	const promise = new Promise((resolve, reject) => {
// 		setTimeout(() => resolve('Hello'), 1000)
// 	})
// 	const error = true
// 	if (!error) {
// 		const res = await promise
// 		return res
// 	} else {
// 		await Promise.reject(new Error('err'))
// 	}
// }
// myFunc().then(res => console.log(res)).catch(err => console.log(err))

// async function getUsers() {
// 	const response = await fetch('url')
// 	const data = await response.json()
// 	return data
// }
// getUsers().then(users => console.log(users))

// // old and new version of promise vs async
// get(url) {
// 	return new Promise((resolve, reject) => {
// 		fetch(url)
// 			.then(res => res.json())
// 			.then(data => resolve(data))
// 			.catch(err => reject(err))
// 	})
// }
// async get(url) {
// 	const response = await fetch(url)
// 	const resData = await response.json()
// 	return resData
// }

// // iterators (generators are better)
// function nameIterator(names) {
// 	let nextIndex = 0;
// 	return {
// 		next: function() {
// 			return nextIndex < names.length ?
// 				{ value: names[nextIndex++], done: false } :
// 				{ done: true }
// 		}
// 	}
// }
// const namesArr = ['Jack', 'Jill', 'John']
// const names = nameIterator(namesArr)
// console.log(names.next().value)

// // generators (note star after function)
// function* createIds() {
// 	let index = 1
// 	while (true) {
// 		yield index++
// 	}
// }
// const name = sayNames()
// console.log(name.next().value)

// // destructuring
// let a, b
// [a, b] = [100, 200]
// [a, b, ...rest] = [100, 200, 300, 400, 500]
// const person = {
// 	name: 'John Doe',
// 	age: 32,
// 	city: 'Miami',
// 	gender: 'Male'
// }
// const { name, age, city } = person

// // maps = key-value pairs
// const map = new Map()
// const key1 = 'some string', key2 = {}, key3 = function() {}
// map.set(key1, 'Value of key1')
// map.set(key2, 'Value of key2')
// map.set(key3, 'Value of key3')
// console.log(map.get(key1))
// console.log(map.size)
// for (let[key, value] of map) {
// 	console.log(`${key} = ${value}`)
// }
// for (let key of map.keys()) {
// 	console.log(key)
// }
// for (let value of map.values()) {
// 	console.log(value)
// }
// map.forEach(function(value, key) {
// 	console.log(`${key} = ${value}`)
// })
// Array.from(map)

// // sets = store unique values
// const set = new Set([100, 'string', true])
// set.add(100)
// set.size
// set.has(100) //must be primitive
// set.delete(100)
// for (let item of set) {
// 	console.log(item)
// }
// set.forEach(value => {
// 	console.log(value)
// })

// // commonJS module syntax
// const person = require('./mymodule1')
// // ES2015 module
// import { person, sayHello } from './mymodule2.'
// import * as mod from './mymodule2'
// import greeting from './mymodule2' // when default export 

