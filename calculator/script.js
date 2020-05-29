var num1="";
var num2="";
var operator="";
var result=0;
var num1Type="integer";
var num2Type="integer";

function allClear() {
    document.querySelector(".calculator-screen").value=0;
    num1="";
    num2="";
    operator="";
}

function numberPressed(val) {
    if(operator=="") {
        num1 += val;
        document.getElementById("screen").value=num1;
        if(val==".")
            num1Type="decimal";
    }
    else {
        num2 += val;
        document.getElementById("screen").value=num1+operator+num2;
        if(val==".")
            num2Type="decimal";
    }
}

function operatorPressed(op) {
    if(operator=="")    
        document.getElementById("screen").value=num1+op;
    if (op=="%")
        document.getElementById("screen").value=num1+operator+num2+op;
    operator=op;
}

    function solve() {
    if(num2=="" || operator=="") {
        document.getElementById("screen").value="Invalid";
        return;
    }
    if(num1Type=="integer") 
        num1=parseInt(num1);
    else
        num1=parseFloat(num1);
    if(num2Type=="integer")
        num2=parseInt(num2);  
    else
        num2=parseFloat(num2);
    if(operator=="/") {
        if(num2 != 0) 
            result=num1/num2;
        else {
            document.getElementById("screen").value="Invalid";
            return;
        }
    }
    else if(operator=="*") 
        result=num1*num2;
    else if(operator=="-")
        result=num1-num2;
    else if(operator=="+")
        result=num1+num2;
    else if(operator=="%")
        result=num2*num1*1.0/100;
    else {
        document.getElementById("screen").value="Invalid";
        return;
    }
    result=result.toString();
    document.getElementById("screen").value=result;
}