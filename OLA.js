let btn=document.getElementById("x")
let div=document.getElementById("bb")
btn.onclick=(e)=>{
    e.preventDefault()
    let i1=document.getElementById("a").value
    div.innerText=i1*6
    let color=Math.floor(Math.random()*100000).toString(16)
    document.body.style.backgroundColor=`#${color}`
}

let bt=document.getElementById("y")
bt.onclick=(e)=>{
    e.preventDefault()
    let i2=document.getElementById("b").value
    div.innerText=i2*7
    let color=Math.floor(Math.random()*100000).toString(16)
    document.body.style.backgroundColor=`#${color}`
}

let b=document.getElementById("z")
b.onclick=(e)=>{
      e.preventDefault()
    let i3=document.getElementById("c").value
    div.innerText=i3*10
    let color=Math.floor(Math.random()*100000).toString(16)
    document.body.style.backgroundColor=`#${color}`
}