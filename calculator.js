
var input=document.querySelector(".input")
var result=document.querySelector(".result")


const canHover = !(matchMedia('(hover: none)').matches);
if(canHover) {
  document.body.classList.add('can-hover');
}

let dotCount=0;

let num=["1","2","3","4","5","6","7","8","9","0"];

let op={"fplus":fplus,"fminus":fminus,"fmultiply":fmultiply,"fdivide":fdivide,"fdot":fdot,"fsign":fsign,"fequal":fequal,"fmod":fmod,"fback":fback,"fce":fce,"fsquare":fsquare,"fsqrt":fsqrt,"foneDivide":foneDivide,"flog":flog
};

function fontCheck(){
    if(window.innerWidth > "600"){
        if(input.innerText.length>=16){
            input.style.fontSize="2rem";
        }
        if(input.innerText.length<16){
            input.style.fontSize="4rem";
        }
        if(input.innerText.length>=30){
            input.style.fontSize="1rem";
        }
    }
    if(window.innerWidth < "600"){
        if(input.innerText.length>=24){
            input.style.fontSize="2.5rem";
        }
        if(input.innerText.length<24){
            input.style.fontSize="2.5rem";
        }
        if(input.innerText.length>=48){
            input.style.fontSize=".5rem";
        }
    }
}

document.addEventListener("keydown",function(e){
    fontCheck();
    if(num.includes(e.key)){
        if(input.innerText=="0"){
            input.innerText=e.key;
        }
        else{
            input.innerText=input.innerText+ e.key;
        }
    }
    if(e.key=="Backspace"){
        fback();
    }
    if(e.key=="Delete"){
        fce();
    }
    if(e.key=="Enter"){
        fequal();
    }
    if(e.key=="."){
        fdot();
    }
    if(e.key=="_"){
        fsign();
    }
    if(e.key=="%"){
        fmod();
    }
    if(e.key=="/"){
        fdivide();
    }
    if(e.key=="*"){
        fmultiply();
    }
    if(e.key=="-"){
        fminus();
    }
    if(e.key=="+"){
        fplus();
    }
})





    
    

function fone(){
    if(input.innerText=="0"){
        input.innerText="1"
    }
    else{
        input.innerText= input.innerText+"1";
    }
}


function fback(){
    if(input.innerText.length<=1){
        input.innerText=0;
    }else{
        if(input.innerText[input.innerText.length-1]=="."){
            dotCount=0;
        }
        input.innerText=input.innerText.substr(0,input.innerText.length-1);
    }
}

function fce(){
    input.innerText=0;
    result.innerText="";
    dotCount=0;
}

function fequal(){
    let res=eval(result.innerText+" "+ input.innerText);
    input.innerText=res;
    result.innerText=""
}
function fdot(){
    for(x in input.innerText){
        if(input.innerText[x]=="."){
            dotCount++;
        }
    }
    if(dotCount<1){
        input.innerText= input.innerText+".";
    }
}

function fsign(){
    if(input.innerText!="0"){if(input.innerText[0]=="-"){
        input.innerText=input.innerText.substr(1,input.innerText.length);
    }else{
        input.innerText="-"+ input.innerText
    }}
}

function fmod(){
    if(result.innerText!=""){
        
        let res=eval(result.innerText+" "+ input.innerText);
        result.innerText=res+" %";
        input.innerText=0;
    }else{
        result.innerText=input.innerText+" %";
        input.innerText=0;
    }
}

function fdivide(){
    if(result.innerText!=""){
        console.log(result.innerText);
        let res=eval(result.innerText+" "+ input.innerText);
        result.innerText=res+" /";
        input.innerText=0;
    }
    else{
        console.log(input.innerText);
        result.innerText=input.innerText+" /";
        input.innerText=0;
        console.log(result.innerText);
    }
}

function fmultiply(){
    if(result.innerText!=""){
        
        let res=eval(result.innerText+" "+ input.innerText);
        result.innerText=res+" *";
        input.innerText=0;
    }else{
        result.innerText=input.innerText+" *";
        input.innerText=0;
    }
}

function fminus(){
    if(result.innerText!=""){
        
        let res=eval(result.innerText+" "+ input.innerText);
        result.innerText=res+" -";
        input.innerText=0;
    }else{
        result.innerText=input.innerText+" -";
        input.innerText=0;
    }
}

function fplus(){
    if(result.innerText!=""){
        
        let res=eval(result.innerText+" "+ input.innerText);
        result.innerText=res+" +";
        input.innerText=0;
    }else{
        result.innerText=input.innerText+" +";
        input.innerText=0;
    }
}

function fsqrt(){
    var root=Math.sqrt(input.innerText);
    input.innerText=root;
}

function flog(){
    let res=Math.log(input.innerText);
    input.innerText=res;
}

function foneDivide(){
    var r=eval("1 / "+ input.innerText)
    input.innerText=r;
}

function fsquare(){
    let res=eval(input.innerText+" "+ " * "+ input.innerText);
    input.innerText=res;
}


function fclick(e){
    let ele=document.querySelector(e);
    ele.classList.add("animate__bounceIn");
    setTimeout(function(){
        ele.classList.remove("animate__bounceIn");
    },500);
    if(num.includes(ele.innerText)){
        if(input.innerText=="0"){
            input.innerText=ele.innerText;
        }
        else{
            input.innerText= input.innerText+ele.innerText;
        }
    }
    for(x in op){
        if(ele.classList[0]==x){
            op[x]();
           

        }
    }
}


