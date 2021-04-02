

let students = ["Amy", "Adam", "Blake", "Circle"]
for (let student of students){
    console.log(student)
}

let alphabet = 'abcdefghijklmnopqrstuvwxyz'
for (let letter of alphabet){
    console.log(letter)
}

let person = {
    name: "Amanda",
    age = 40
}

for (let entry of Object.entries(person)){
     console.log(entry)
}

//anything you call based on type = Static method
//String.slice()
//Object.entries()
