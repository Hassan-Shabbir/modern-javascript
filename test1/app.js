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


// Define a web server/client DSL:
// use an emmet-like language for writing html-expressions
// examples and results written below
//
// em '.foo#bar>ul>2*li' NB. create html based on expression
// <div id="bar" class="foo">
// 	<ul>
//		<li></li>
//		<li></li>
//  </ul>
// </div>
//
// (;: 'Hi didi') ap 'ul>*li{$}' NB. apply boxed array, looping on the starred subtree (not subexpression)
// (;: 'Hi didi') ap 'ul>*li$'   NB. simplified syntax
// <ul>
// 	<li>Hi</li>
// 	<li>didi</li>
// </ul> 
//
// (;: 'h1 p1 h2 p2') ap '*.page>h2$+p$'
// <div class="page">
// 	<h2>h1</h2>
// 	<p>p1</p>
// </div>
// <div class="page">
// 	<h2>h2</h2>
// 	<p>p2</p>
// </div>
//
// em 'h1{Hello $name}' ] name =: 'Hassan Shabbir'
// <h1>Hello Hassan Shabbir</h1>
//
// em 'h1{Hello $(|.name)}' ] name =: 'Hassan Shabbir' NB. J expressions in $()
// <h1>Hello ribbahS nassaH</h1>
//
// em 'img[src=www.google.com alt="an image"]' NB. attributes in [], space separated
// <img src="www.google.com" alt="an image">
//
// em 'p[style=$paraStyle]{hi}' NB. with paraStyle =: cut 'color purple font-family comic-sans,cursive font-size 2em'
// <p style="color: purple; font-family: "Comic Sans", cursive; font-size: 2em;">hi</p>
//
// em 'h1{hi}+$para' NB. para =: p{this is a paragraph} NB. components using variables in html positions
// <h1>hi</h1>
// <p>this is a paragraph</p>
//
// em 'h1{hi}+3*$lorem' NB. lorem =: p{Lorem ipsum dolor sit amet} NB. lorem is a component
// <h1>hi</h1>
// <p>Lorem ipsum dolor sit amet</p>
// <p>Lorem ipsum dolor sit amet</p>
// <p>Lorem ipsum dolor sit amet</p>
//
// em 'btn[clk=0:$v+1]{Clicked $v time$((v>1)?:'s')!}' NB. ?: is an if expression
// <script>let v = 0;</script>
// <button click="() => v = v+1">Clicked {v} time{v > 1 ? 's' : ''}!</button>
//
// NB. $ extended to loop over boxed matrixes; uses title case for props; as key-value pairs (also useful for styles)
// em 'ul>*li{$obj}' ] obj =: ;: 'name hassan age 23 job soft-dev city pickering'
// <ul>
//   <li>Name: ${name}</li>
//   <li>Age: ${age}</li>
//   <li>Job: ${job}</li>
//   <li>City: ${city}</li>
// </ul>
//
// em 'ul>li{$obj_name}' ] obj =: ;: 'name hassan age 23 job soft-dev city pickering' NB. get prop in object
// <ul>
//   <li>Name: ${name}</li>
// </ul>
//
// em 'btn[clk=$v+1]{$v doubled is $d}`v=0:+1;d=v*2`' NB. use `` for scripts; all vars that depend on referenced vars are auto updated
// <script>let v = 0; let d = v * 2;</script>
// <button click="() => v = v+1">{v} doubled is {d}</button>
//
// NB. have a development and server version (ie dev =: 0 and dev =: 1)?
//
// '/' serve em 'p{hello world}' NB. default port to 8080 and location to localhost (at least when dev =: 1)
//
// '/didi' serve (;: 'Hi didi') ap 'ul>*li$' 
//
// '/friends' serve (;: 'Aboo Mama Ahson Maria') ap 'h1{Your friends}+p{Here is a list of your friends:}+ul>*li$'
//
// '/friend-details' serve (;: 'Aboo 60 Mama 57 Ahson 30 Maria 26') ap 'h1{Your friends}+p{Here is a list of your friends:}+ul>*li{$ ($ years old)}'
//
// NB. differentiate between escaped and unescaped html code
// NB. component support (place html,css,js in the correct spot in the DOM)
// NB. automatic form generation and verification (including javascript verification) and parsing of put requests (into json object?)
//
// NB. generate forms using the following expression
// NB. seems like $_ at least will be needed to be able to reuse values more than once
// (;: 'first-name last-name') ap 'form[action=/signup]>*(label[for=$]{$}+br+input#$[type=text name=$]+br)+input[type=submit value=Submit]'
//
// t =: 4 3 $ ;: 'c1 c2 c3 b1 b2 b3 b4 b5 b6 b7 b8 b9'
// NB. also add in sticky headers and zebra stripes
// NB. num(tr) = rows - 1 (one is used for th); num(th) and num(td) = cols
// em 'table>tr>th*3^tr*3>td*3'

// NB. add in the ability to have nested components, like the following
// em 'p{hi there my name is }+i{hassan}+p{how are you?}'
// em 'p{hi there my name is i{hassan} how are you?}'

// NB. default to placing the tags in the correct location (styles,title,meta in head, html in body, javascript at end of body)
// NB. only include a library once (like JQuery)
// NB. | splits between head (before |) and body (after |) and automatically move scripts to end of body if in the body
// em 'title{my app}|script{console.log("hi")}+h1{this is my app}'

// em 'title{title}+script[src=/included-in-head.js]|script[src=/included-in-body.js]'

// NB. automatically add comments in generated html and css and uncompress code when in dev mode; add compression and minification and remove html/css comments

// NB. components should be composable like the following:
// a =: em 'h1[style="color:green;"]{My Title}' 
// b =: em 'title{My page title}+script[src=http://www.example.com/script.js]' 
// c =: em '$a+$b'

// footer =: em 'footer[style="fwb tac"]>p{That is all folks!}'
// page =: em 'p{my page.}+$footer'
// NB. OR (without using components)
// page =: em 'p{my page.}+footer[style="fwb tac"]>p{That is all folks!}'

// section.blog[style='p1e b1s0 h1>c#ccf']

// NB. define simplified notation that does not require the use of `[style='']` to define styles; for example:
// section.blog%'p1e b1s0 h1>c#ccf'

// NB. change ap to be reversed? (;: 'Hi didi') ap 'ul>*li{$}' => 'ul>*li{$}' ap ;: 'Hi didi'

// NB. change serve function to get, post, put, delete functions

// NB. @ is used as a suffix to refer to the sizes of screens, small, medium, large; in @[sml]{1,3}
// p%'fs4em'@s%'fs3em'@m%'fs2em'@l
// p%'fs3em'@sm

// NB. define base url in a variable since it will be used to append to get, etc. as well as use in the base html tag

// NB. remember to add this meta tag
meta[name=viewport content="width=device-width, initial-scale=1.0"]
meta[name=viewport content=width=device-width,initial-scale=1.0]

use the type system developed by Carol Tuttle to auto-design websites
for example, design =: 2 4, and have the css change based on that.
also give the ability to choose between the four components (different based on type) and the 
default chosen by the first type of design. ie:
$comp+$comp1+$comp2+$comp3+$comp4


NB. @ is used as a prefix to refer to the sizes of screens, small, medium, large; as in [sml]@
NB. this applies the rest of the styles to only those screen sizes
p%'s@fs4em'%'m@fs3em'%'l@fs2em'
p%'sm@fs3em'

NB. the design variable should be as follows: [1-4]([1-4][sm]){,2}
NB. where s stands for shape and m stands for movement
NB. eg. 2, 24m, 24s1m

NB. create a grid system with .g for creating 2-d grid, .r for creating a 1-d row
NB. with class .N referring to size out of 12 the element will take up
NB. .g is optional if only creating a row. .N is optional those elements will split
NB. the remaining space between themselves (1fr right?).

.r>img.3+p.9
<div class="r">
	<img class="3" src="" alt="">
	<p class="9"></p>
</div>

.g>.r>.a*3^.r>.a*3
<div class="g">
	<div class="r">
		<div class="a"></div>
		<div class="a"></div>
		<div class="a"></div>
	</div>
	<div class="r">
		<div class="a"></div>
		<div class="a"></div>
		<div class="a"></div>
	</div>
</div>

NB. create component functions such as the following:
NB. should components have multiple sections to interpolate into? (splats may be necessary)
NB. no, use nth value of tree if multiple values are needed
NB. use $$ for interpolation
NB. can looping and component definition be combined into one?
NB. use & to define component (auto-hidden subtree), and use $ to use it
'$footer{The fourth value comes from here}+&footer>.first>p{I}^.second>p{love}^.third>p{chocolate}^.fourth>p$$'
cta =: 'div>,' NB. or
cta =: 'div>,1+p{foo}+,2+,3'
$footer{.a}{.b}{.c} or as $footer{.a+.b+.c}
$cta{p{BUY, NOW!}+btn{BUY}} NB. call to action


NB. write about what influenced me
parenthesized expressions
(nav>.logo+.search+.button)+(.body>.page1+.page2+.page3)+(footer>.first+.second+.third)
eq without expression:

allow modifications within the language (toggle?)
.foo ~ #elem

think about how to combine javascript, J and a language to describe interactive functionality together

always dynamic values by default, then behaviour or event if needed

dynamically changing the value to be the number of clicks
references to elements become their event history in (reverse?) chronological order
name resolution order: id, class, html element, J var (therefore # and . can be continued to be used as J without disambiguation)
should a class name resolution combine all events from all selected elements, or those with a particular html element, or just the first element found with that class
button#b{Click me!}+p{You clicked the button `#b` times!} NB. count the number of events

last sent message
textarea#ta+button{Submit}+p{Your last sent message: `>{:>{:ta`.}

(dis)able button
checkbox#c{toggle}+submit[enabled=`>{:>{:c`]

Use _v (value) as a shortcut for >{:>{: and _e (event) for >{:
though other ones can be made such as first value _f* (1{) and previous value _p* ((n-1){)
textarea#ta+button{Submit}+p{Your last sent message: `ta_v`.}
ta+b{Submit}+p{Your last sent message: `ta_v`.}
checkbox#c{toggle}+submit[enabled=`c_v`]


Note that this does not work because a textarea should send an event on change
while the button submit only sends a click event, so then perhaps a form element
should contain sent events only when the submit button is pressed
form>ta+b{Submit}^p{Your last sent message: `ta_v`.}

dynamic attrs
gif =: 'rickAstley.gif'
img[src=gif]
OR should it be the following
img[src=`gif`]



svelte reactive assignments:
<script> let count = 0; function handleClick() { count += 1; } </script> <button on:click={handleClick}> Clicked {count} times </button>
my language example:
b{Clicked `#b` times}

svelte reactive declarations:
<script> let count = 1; $: doubled = count * 2; $: quadrupled = doubled * 2; function handleClick() { count += 1; } </script> <button on:click={handleClick}> Count: {count} </button> <p>{count} * 2 = {doubled}</p> <p>{doubled} * 2 = {quadrupled}</p>
my example:
b{Count: `#b`}+p{`#b` * 2 = `2*#b`}+p{`2*#b` * 2 = `4*#b`}


TODO: svelte reactive statements: (dont understand if expressions in J)
<script> let count = 0; $: if (count >= 10) { alert(`count is dangerously high!`); count = 9; } function handleClick() { count += 1; } </script> <button on:click={handleClick}> Clicked {count} times </button>


svelte looping over elements:
<script> let cats = [ { id: 'J---aiyznGQ', name: 'Keyboard Cat' }, { id: 'z_AbfPXTKms', name: 'Maru' }, { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' } ]; </script> 
<h1>The Famous Cats of YouTube</h1> <ul> {#each cats as { id, name }, i} <li><a target="_blank" href="https://www.youtube.com/watch?v={id}"> {i + 1}: {name} </a></li> {/each} </ul> 

my example: (use $# to refer to the ith loop)
'h1{The Famous Cats of YouTube}+ul>*li>a[href="https://www.youtube.com/watch?v=$$"]{$#: $$}' ap~ 'J---aiyznGQ';'Keyboard Cat';'z_AbfPXTKms';'Maru';'OUtn3pvWmpg';'Henri The Existential Cat'

negated
checkbox#c{toggle}+submit[enabled=`-.c_v`]


<script> let todos = [ { done: false, text: 'finish Svelte tutorial' }, { done: false, text: 'build an app' }, { done: false, text: 'world domination' } ]; </script> <h1>Todos</h1> {#each todos as todo} <div> <input type=checkbox bind:checked={todo.done} > <input bind:value={todo.text} disabled={todo.done} > </div> {/each}

note: change the data before passing it into the html portion if necessary
my example:
, 0 1 0 {"(1) 3 2 $ 0;'finish Svelte tutorial';0;'build an app';0;'world domination'
h1{Todos}+*div>checkbox[checked=$$]+textbox[value=$$ disabled=$$]


comparison with reflex-dom
{-# LANGUAGE OverloadedStrings #-} import Reflex.Dom main :: IO() main = mainWidget $ do el "h1" $ text "Welcome to Reflex-Dom" el "div" $ do el "p" $ text "Reflex-Dom is:" el "ul" $ do el "li" $ text "Fun" el "li" $ text "Not difficult" el "li" $ text "Efficient"

h1{Welcome to Reflex-Dom}+div>p{Reflex-Dom is:}+ul>li{Fun}+li{Not difficult}+li{Efficient}

reflex-dom adding and subtracting using buttons:
{-# LANGUAGE RecursiveDo #-} {-# LANGUAGE OverloadedStrings #-} import Reflex.Dom main :: IO () main = mainWidget bodyElement bodyElement :: MonadWidget t m => m () bodyElement = do rec counts <- foldDyn (+) (0 :: Int) $ leftmost [1 <$ evIncr, -1 <$ evDecr] el "div" $ display counts evIncr <- button "Increment" evDecr <- button "Decrement" return ()

b#a{Increment}+b#b{Decrement}+p{Total: `(#a)-#b`}

TODO reflex-dom combining event timelines:
{-# LANGUAGE RecursiveDo #-} {-# LANGUAGE OverloadedStrings #-} import Reflex.Dom main :: IO () main = mainWidget bodyElement bodyElement :: MonadWidget t m => m () bodyElement = do el "h2" $ text "Using foldDyn with function application" rec dynNum <- foldDyn ($) (0 :: Int) $ leftmost [(+ 1) <$ evIncr, (+ (-1)) <$ evDecr, const 0 <$ evReset]  el "div" $ display dynNum evIncr <- button "Increment" evDecr <- button "Decrement" evReset <- button "Reset" return ()


to make the sorts (asc, desc) work, the first value in the event must be the timestamp of the occurrance
\:~ a,b,c
