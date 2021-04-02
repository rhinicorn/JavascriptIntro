// name (takes data=argument)=> give data out
//f(x)=x*x //square function

/*
way one:
    <keyword> <itsname>(<what it needs to work=parameter>){
        //what I do
        return //what I want to give back
    }
way two:
    <keyword>
*/


function sqrt(x){
    return x*x
}

console.log(sqrt(5))

//let result =sqrt(5)
//console.log(result)

//fat arrow function or lamda expression -- explicit return
//when you want to something before the return use this one
let aSqr = (x)=> {
    return x*x
}


let bSqr = (x,y) => return x*y //wrapped when more than one arguments -- implicit return
let cSqr = x => return x*x  //only used for single arguements  --implicit return


function greet(){
    console.log("Hello World")
}

greet()

function betterGreet(firstName){
    console.log("Hello "+firstName)
}

betterGreet(Amanda)

let createFullName = (fname, lname) => '$(fname) $(lname)' //implicit
let createNewName = (fname, lname) => {return f}

