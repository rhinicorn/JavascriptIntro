//for loop

/*
legend
    keyword= for
    1 = a variable to keep track of iteration
    2 = a condition to check each iteration
    3= how to modify your variable

<keyword> (<1>;<2>;<3>){
    //do what we want to do
}


ex for(i=1; i<=10; i++){
    console.log(i)
}
*/


for(let x=0; x<20;x++){
    if(x%2==0){
        console.log(x)
    }
}

let myName="Amanda"
for(let i=0; i<myName.length;i++){
    console.log(myName[i]) //collection indexing is strings or arrays
    
}