import React from "react";

function Die(props) {
    var myDice = Math.floor(Math.random()) * 6
    return(
        <div>
            <h1>{props.myDice}</h1>
        </div>
    )
}

export default Die;