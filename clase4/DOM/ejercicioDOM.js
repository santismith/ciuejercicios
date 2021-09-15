var $div = document.querySelector("div")
$div.style.width = "100px"
$div.style.height = "100px"
$div.style.backgroundColor = "green"

$div.classList.add("square")

setInterval(function(){$div.classList.toggle("square")},1000)
