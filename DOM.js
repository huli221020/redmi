let div =document.createElement('div')
let p =document.createElement('p')
let span =document.createElement('span')
let h1 =document.createElement('h1')

span.innerText = "sorry";
h1.innerText = "its ok";

h1.style.color = "red";
span.style.color = "green";

document.body.appendChild(p)
p.appendChild(h1)

document.body.appendChild(div)
div.appendChild(p)

document.body.appendChild(span)