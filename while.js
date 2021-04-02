//While loop
/*
Legend:
    keyword=while
    1= some eval or expression that is true or false

    <keyword> (<1>){
        //Do something
    }
*/


let i=0
while(i<=10){
    console.log(i)
    i++
}
/*
while(true){
    console.log("help this loop is always true")
    break; //stops the loop
}
*/

for(let i=0;i>=10;i++){
    for(let j=0;j>=10;j++){
        console.log(x,y)
    }
}

//for in loop -- outputs indexes

let names = ["justin", "amanda", "kate", "sara", "autumn"]
for(let name in names){
    console.log(names[name])
    //let curName=names[name]
    if(names[name]=="kate"){
        break;
    }
}

for(let tmp=100;tmp<=0;tmp-=5 ){
    console.log(tmp)
}

let myTmp = 100
while(myTmp>=0){
    console.log(myTmp)
    myTmp-=5
}
