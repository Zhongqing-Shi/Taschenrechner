"use strict";
let display=document.getElementById("screen");
let inputNum="";
//to save all the input numbers and operators
let temp=[];

//add functions for every number key
let num=document.getElementsByClassName("key");
for(let i=0; i<num.length; i++){
    num[i].addEventListener("click",input);
}

//add functions for every operator key
let oper=document.getElementsByClassName("operator");
for(let i=0; i<oper.length; i++){
    oper[i].addEventListener("click",operate);
}

//add functions for other keys
document.getElementById("del").addEventListener("click", deleteNumber);
document.getElementById("reset").addEventListener("click",resetAll);
document.getElementById("equal").addEventListener("click",equal);
document.getElementById("point").addEventListener("click",checkpoint);

//check if the input number has already a point
function checkpoint(event){
    if(inputNum.includes(".")){
        inputNum+="";
    }else{
        input(event);
    }
}

//delete number
function deleteNumber(){
    if(display.innerText=="0"){
        display.innerText="0";
    }else{
        let cut=inputNum.slice(0,inputNum.length-1);
        inputNum=cut;
        if(inputNum==""){
            display.innerText="0";
        }else{
            if(inputNum.includes(".")){
                display.innerText=cut;
            }else{
                display.innerText=tolocalstring(cut);
            }
            /*if(inputNum[inputNum.length-1]=="."){
                let tempNum=tolocalstring(cut)+".";
                display.innerText=tempNum;
            }else{
                display.innerText=tolocalstring(cut);
            }*/
        }
    }
    console.log(inputNum);
}

//input numbers
function input(event){
    let value=event.target.innerText;
    inputNum+=value;
    console.log(inputNum);
    if(display.innerText=="0"){
        if(inputNum=="0" || inputNum=="00"){
            inputNum="0";
            display.innerText="0";
        }else{
            display.innerText=inputNum;
        }
    }else{
        if(inputNum.includes(".")){
            /*if(inputNum[inputNum.length-1]=="."){
                let tempNum=tolocalstring(inputNum)+".";
                display.innerText=tempNum;
            }else{
                display.innerText=inputNum;
            }*/
            display.innerText=inputNum;
        }else{
            display.innerText=tolocalstring(inputNum);
        }
    }
}

//functions for + - * /, the four operators
function operate(event){
    temp.push(inputNum);
    temp.push(event.target.innerText);
    inputNum="";
}

//export the final result on the screen, as the function of equal key
function equal(){
    temp.push(inputNum);
    let join=temp.join("")
    display.innerText=eval(join);
    temp=[];
    inputNum=display.innerText;
}

//reset the calculator
function resetAll(){
    display.innerText="0";
    inputNum="";
    temp=[];
}

//switch a number to string with local settings, in this case to add comma to spilt every 3 digits.
function tolocalstring(str){
    let strnum=parseInt(str);
    let strnew=strnum.toLocaleString('zh');
    return strnew;
}



//theme switch
let toggle = document.getElementsByClassName("toggle-button");
for(let i =0; i <toggle.length; i++){
    toggle[i].addEventListener("click", switchTheme);
}

function switchTheme(event) {
    for(let i =0; i <toggle.length; i++){
        toggle[i].style.opacity="0";
    }
    event.target.style.opacity="1";
    let color=event.target.id;
    document.documentElement.setAttribute("data-theme",color ); 
}  

