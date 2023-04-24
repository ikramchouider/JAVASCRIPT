const inputbtn = document.getElementById("input-btn")
let myleads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
inputbtn.addEventListener("click", function(){
 
  myleads.push(inputEl.value)
  inputEl.value=" "
  renderlead()

})
function renderlead(){
    let listitems =""
    for( let i=0 ; i< myleads.length ; i++){
       //listitems += "<li> <a target=_blank href='"+ myleads[i]+"'>"+ myleads[i] +"</a>" + "</li>"
        //const li= document.createElement("li")
        //li.innerText=myleads[i]
        listitems +=
         `<li> 
               <a target=_blank href='${myleads[i]}'>  
              ${myleads[i]}
                 </a>  
         </li>`

     }
     ulEl.innerHTML =listitems

}

