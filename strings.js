//single line comment
console.log("This is text, and a string.");

/* multi-line comment 
These are all the ways to create a string*/

let str_a= "this is a double quote string"
let str_b= 'this is a single quote string' //use to add data into a string
let str_c= `this is a back tick quote string` //use to add data into a string
let str_d= String(5)  //use to add data to a string

let f_name = "Amanda"
let l_name = "Wilkerson"

let fullname = f_name + l_name
console.log(fullname)


//unary operator that gives back type info
console.log(typeof f_name)

//unary only needs one arguement (one side or the other)
//binary needs two arguements (one on each side)

//template string
let strC=`this is a back tick string`
let templateFull = `${f_name} ${l_name}`
console.log(templateFull)

let multiLine1 = 'this is a long string'+ 'and this is the rest'
let multiLine2 = 'this is also a way to \
break up a long string on multiple lines'

//indexing

