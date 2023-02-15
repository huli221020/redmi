let input=document.querySelector("input")
input.addEventListener("keypress",()=>{
    let color=Math.floor(Math.random()*100000).toString(16)
    document.body.style.backgroundColor=`#${color}`
   })