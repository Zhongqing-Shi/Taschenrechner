"use strict";
let display=document.getElementById("screen");
//display.innerText=tolocalstring("13567.98763");
let inputNum="";
let temp=[];

let num=document.getElementsByClassName("key");
for(let i=0; i<num.length; i++){
    num[i].addEventListener("click",input);
}

let oper=document.getElementsByClassName("operator");
for(let i=0; i<oper.length; i++){
    oper[i].addEventListener("click",operate);
}

document.getElementById("del").addEventListener("click", deleteNumber);
document.getElementById("reset").addEventListener("click",resetAll);
document.getElementById("equal").addEventListener("click",equal);
document.getElementById("point").addEventListener("click",checkpoint);

function checkpoint(){
    if(inputNum.includes(".")){
        inputNum+="";
    }else{
        input(event);
    }
}

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

function operate(event){
    temp.push(inputNum);
    temp.push(event.target.innerText);
    inputNum="";
}

function equal(){
    temp.push(inputNum);
    let join=temp.join("")
    display.innerText=eval(join);
    temp=[];
    inputNum=display.innerText;
}

function resetAll(){
    display.innerText="0";
    inputNum="";
    temp=[];
}

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

