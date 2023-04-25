let age : number = 36;
let firstName: string = 'Veronica'
let isTall: boolean = true;
let childrensNames: string[] = ['Ann','Steph']




console.log(`${firstName} is ${age} years old`)

if (isTall) {
    console.log('and so tall')
}else{
    console.log('and so pretty')
}

for (let i: number = 0; i < childrensNames.length; i++) {
    console.log(childrensNames[i])
}



enum taxForm {
    standardTaxForm = "1040",
    childTaxForm = "641",
    cryptoTaxForm = '420S'
}

// console.log("the crypto one is:", taxForm.cryptoTaxForm)
// console.log("the crypto one is:", taxForm.cryptoTaxForm)
// console.log("the crypto one is:", taxForm.cryptoTaxForm)
// console.log("the child one is:", taxForm.childTaxForm)

let zipCode: string | number = 12345//true
zipCode = "ABCDE"//true
//zipCode= true // not allowed
// console.log(zipCode)

function sum(x: number, y: number): number {
    return x+y

}
let total: number = sum(5,6)
// console.log(total)

function debug (message: string) : void {
    console.log(message)
}
// debug("hello world")

interface person {
    firstName: string,
    age: number,
    children: string[],
    hasCertificate?: boolean,
}

let veronica: person = { 
    firstName: "me",
    age: 23,
    children: ["Simone","Luca"],
    hasCertificate: false
}
console.log(veronica)



