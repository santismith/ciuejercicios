var $body = document.querySelector("body")


var seEjecutaEnEvento = function(){
    $body.insertAdjacentHTML("beforeend","BEEP")
    $body.classList.toggle("color")
}

document.querySelector("button").addEventListener("click",seEjecutaEnEvento)