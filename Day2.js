var firstName="Bhuvanesh"
var firstName="Akila"// redeclaration is allowed
console.log(firstName) 
firstName="vignesh" // reinitialization is allowed
console.log(firstName) 
console.log(empNo) // hoisting is allowed
let empNo= 1234 
// keyword 
function print(){//body // function scope
// local variable    
 let empAge=25 
 {
    //local variable
    let empPhno=897979697987; 
    console.log(empPhno) 
 }
 //console.log(empPhno)
}
print()
//console.log(empPhno)
