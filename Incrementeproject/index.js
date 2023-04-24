// console.log(45)
// let count = 0
// console.log(count)
//ctrl+k+c
let count=0
let countel=document.getElementById("count")

  function increment(){
     count=count+1
     countel.innerText=count 


  }
  let saveEl = document.getElementById("save-el")
  function save()
  {
     let countStr = count + " - "
     saveEl.textContent += countStr
     countel.innerText=0
     count =0
  }

 