import React from "react";

const Card =( {firstName, lastName, placeOfBirth, email, phone, favFood, textBox }) => {
 
    return (
        <div>
        <div id="my-badge" placeholder="Badge:">Badge:</div>
            <form className="my-form2" >
                <label id="my-label1" >Name:{firstName}  {lastName}</label>
                <label id="my-label2">Phone:{phone}</label>
                <label id="my-label3">Place of birth:{placeOfBirth}</label>
                <label id="my-label4">Favorite food: {favFood}</label>
                <label id="my-label5">Email:{email}</label>
                <textarea id="my-area2">{textBox}</textarea>
            </form>
        </div>
    )
}


export default Card