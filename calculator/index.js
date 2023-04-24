let screenEl =  document.getElementById("screen")
let count1 
let count2 
let operator
function one(){
    screenEl.innerText= (screenEl.innerText)*10 +1
    
}
function two(){
    screenEl.innerText= (screenEl.innerText)*10 +2
    
}
function three(){
    screenEl.innerText= (screenEl.innerText)*10  +3
    
}
function four(){
    screenEl.innerText=(screenEl.innerText)*10 +4
    
}
function five(){
    screenEl.innerText=(screenEl.innerText)*10  +5
    
}
function six(){
    screenEl.innerText=(screenEl.innerText)*10  +6
    
}
function seven(){
    screenEl.innerText=(screenEl.innerText)*10  +7
    
}
function eight(){
    screenEl.innerText=(screenEl.innerText)*10 +8
    
}
function nine(){
    screenEl.innerText=(screenEl.innerText)*10 +9
    
}
function zero(){
    screenEl.innerText=(screenEl.innerText)*10  +0
    
}
function del(){
    screenEl.innerText=0
    document.getElementById("error").innerText=""

}
function add(){
    count1 = screenEl.innerText
    screenEl.innerText=0
    operator="+"
}
function sub(){
    count1 = screenEl.innerText
    screenEl.innerText=0
    operator="-"
}
function mul(){
    count1 = screenEl.innerText
    screenEl.innerText=0
    operator="*"
}
function div(){
    count1 = screenEl.innerText
    screenEl.innerText=0
    operator="/"
}
function equal(){
    count2 = screenEl.innerText
    if (operator=="+"){
        screenEl.innerText= count1 + count2
    }
    if (operator=="-"){
        screenEl.innerText=count1 - count2
    }
    if (operator=="*"){
        screenEl.innerText=count1 * count2
    }
    if (operator=="/"){
        if (count2==0) {
            document.getElementById("error").innerText="You cant divide by 0"
            screenEl.innerText="error!!"
        }
       else{
        screenEl.innerText=count1 / count2
       }
        
    }
    
    
    
}

