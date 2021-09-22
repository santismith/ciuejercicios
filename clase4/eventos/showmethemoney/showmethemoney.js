
var boton1 = document.querySelector(".boton1")
var imagen1 = document.querySelector(".imagen1")


boton1.addEventListener("click", function(){
    imagen1.classList.toggle("oculto")
}
)

imagen1.addEventListener("click", function(){
    this.classList.add("oculto")
})

var boton2 = document.querySelector(".boton2")
var imagen2 = document.querySelector(".imagen2")

boton2.addEventListener("click", function(){
    imagen2.classList.toggle("oculto")
}
)

imagen2.addEventListener("click", function(){
    this.classList.add("oculto")
})

var boton3 = document.querySelector(".boton3")
var imagen3 = document.querySelector(".imagen3")

boton3.addEventListener("click", function(){
    imagen3.classList.toggle("oculto")
}
)

imagen3.addEventListener("click", function(){
    this.classList.add("oculto")
})
