 
 let  errorparagraph = document.getElementById("error") 
 console.log(errorparagraph)
 function purchase() {
    console.log("button clicked")
   errorparagraph.innerText="Something went wrong , please try again"
 }