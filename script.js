var bt1 = document.querySelector("#bt1")
var bt2 = document.querySelector("#bt2")
var bt3 = document.querySelector("#bt3")
var bt4 = document.querySelector("#bt4")
bt1.addEventListener("mouseover", function(){
    var h1 = document.querySelector(".h1")
    var div = document.querySelector(".d1")
    h1.style.color = "yellow";
    div.style.boxShadow = "5px 5px 10px yellow";
})
bt2.addEventListener("mouseover", function(){
    var h1 = document.querySelector(".h1")
    var div = document.querySelector(".d1")
    h1.style.color = "red";
    div.style.boxShadow = "5px 5px 10px red";
})
bt3.addEventListener("mouseover", function(){
    var h1 = document.querySelector(".h1")
    var div = document.querySelector(".d1")
    h1.style.color = "blue";
    div.style.boxShadow = "5px 5px 10px blue";
})
bt4.addEventListener("mouseover", function(){
    var h1 = document.querySelector(".h1")
    var div = document.querySelector(".d1")
    h1.style.color = "violet";
    div.style.boxShadow = "5px 5px 10px violet";
})
