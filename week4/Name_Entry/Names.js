import React from "react"


var newList = document.getElementById("ordered-list")
function myList(names){
    for(i=0; i< names.length;i++){
        var names = ["Carlos, Crys, Maya, Shan, Donavon"]
        var newLi = document.createElement("li")
        newLi.textContent= {surprise:event.target.value + names[i]}
        newList.append(newLi)
    }
}

export default Names