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
console.log(zipCode)