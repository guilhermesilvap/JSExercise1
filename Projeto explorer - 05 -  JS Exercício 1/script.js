alert("Iremos fazer a soma, subtração, divisão, resto da divisão e multiplicação de dois números e no final verificaremos se ele é par e se são iguais. ")

let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo
let subtraction = numberOne - numberTwo
let multiplication = numberOne * numberTwo
let division = numberOne / numberTwo
let restDivision = numberOne % numberTwo

alert(`A soma dos dois números é ${sum}`)
alert(`A subtração dos dois números é ${subtraction}`)
alert(`A multiplicação dos dois números é ${multiplication}`)
alert(`A divisão dos dois números é ${division}`)
alert(`O resto da divisão dos dois números é ${restDivision}`)

if(sum%2 === 0){
    alert(`O resultado da soma dos dois numeros é par`)
}else{
    alert(`O resultado da soma dos dois número é impar`)
}

if(numberOne === numberTwo){
    alert("Os números são iguais")
}else{
    alert("Os números são diferentes")
}