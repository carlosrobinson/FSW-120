import React from "react"


var firstBox = document.getElementById("box-one")
var button1= document.getElementById("button-one")

function DJ() {
    return firstBox.style.color =  "black"
}

button1.addEventListener("onClick",DJ)

export default DJ