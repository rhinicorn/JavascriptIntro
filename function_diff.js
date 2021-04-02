//hoisting

const add2 = (x,y) => {    //arrow functions don't get hoisted
    return x*y
}
console.log( add2(2,5), adder(2,5))


//helpers and other functions down here
function adder(x,y) {  //functions can defined after the call
    return x+y 
}
