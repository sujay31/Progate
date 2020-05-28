var num1="";
var num2="";
var operator="";
var result=0;

// function allClear() {
//     document.querySelector(".calculator-screen").value=0;
// }

function numberPressed(val) {
    if(operator=="") {
        num1 += val;
        document.getElementById("screen").value=num1;
    }
    else {
        num2 += val;
        document.getElementById("screen").value=num1+operator+num2;
    }
}

function operatorPressed(op) {
    operator=op;
    document.getElementById("screen").value=num1+operator;
}

function solve() {
    num1=parseInt(num1);
    num2=parseInt(num2);    
    if(operator=="/") {
        if(num2 != 0) 
            result=num1/num2;
        // else {
        //     document.getElementById("screen").value="Invalid";
        //     break;
        // }
    }
    else if(operator=="*") 
        result=num1*num2;
    else if(operator=="-")
        result=num1-num2;
    else if(operator=="+")
        result=num1+num2;
    else if(operator=="%")
        result=num2*num1*1.0/100;
    // else {
    //     document.getElementById("screen").value="Invalid";
    //     break;
    // }
    result=result.toString();
    document.getElementById("screen").value="saamne se left waha se fuck off";
}



































// const numbers = document.querySelectorAll(".number")
// console.log(numbers);

// numbers.forEach((number) => {
//     number.addEventListener("click", (event) => {
//         inputNumber(event.target.value)
//         updateScreen(currentInput)
//     })
// })
// const calculatorScreen = document.querySelector('.calculator-screen')

// const updateScreen = (number) => {
//     calculatorScreen.value = number;
// }

// let prevInput = '0'
// let calculationOperator = ''
// let currentInput = '0'

// const inputNumber = (number) => {
    
//     if (currentInput === '0') {
//         currentInput = number;
//     }
//     else {
//         currentInput += number;
//     }
//     console.log(currentInput)
// }


// const operators = document.querySelectorAll(".operator")

// operators.forEach((operator) => {
//     operator.addEventListener('click', (event) => {
//         inputOperator(event.target.value)
//         console.log(event.target.value)
//     })
// })

// const inputOperator = (operator) => {
//     prevInput = currentInput
//     calculationOperator = operator
//     currentInput = '0'
// }

// const equalSign= document.querySelector('.equal-sign')

// equalSign.addEventListener('click', ()=>{
//     calculate()
//     console.log('=')
//     updateScreen(currentInput)
// })

// const calculate= ()=>{
//     let result= 0
//     let num1= parseInt(prevInput)
//     let num2= parseInt(currentInput)
//     switch(calculationOperator){
//         case '+':
//             result=  num1 + num2
//             break
//         case '-':
//             result= num1-num2
//             break
//         case '*':
//             result= num1* num2
//             break
//         case '/':
//             result= num1/ num2
//             break
//         default:
//             return
//     }
//     currentInput= result.toString()
//     calculationOperator= ''
// }