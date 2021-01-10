import React from "react";

function HeroData(props) {
    return(
        <div>
            <h3  onClick={(event) => alert(props.item.catchPhrase) }>{props.item.name}</h3>
            <p>{props.item.show}</p>
            <p></p>
            <img src={props.item.imageName}  onClick={(event) => alert(props.item.catchPhrase) }/>
        </div>
    )
}

export default HeroData;