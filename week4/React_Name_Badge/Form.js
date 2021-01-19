import React from "react"
import BadgeList from "./BadgeList"
//import Phone from "./Phone"
class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            placeOfBirth: "",
            email: "",
            phone: "",
            favoriteFood: "",
            textDiplay: "",
            badgeData: [],
            disabled: true
        }
        this.handleButton = this.handleButton.bind(this)
        // this.handlesubmit = this.handlesubmit.bind(this)
}
handleFirstName =(e) => {
    const {name, value} = e.target
    this.setState({[name]:value})
}

handlesubmit =(e) => {
    e.preventDefault()
    let data = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        placeOfBirth: this.state.placeOfBirth,
        email: this.state.email,
        phone: this.state.phone,
        favoriteFood: this.state.favoriteFood,
        textDiplay: this.state.textDiplay
    }
    this.setState({badgeData: [data, ...this.state.badgeData],             
    firstName: "",
    lastName: "",
    placeOfBirth: "",
    email: "",
    phone: "",
    favoriteFood: "",
    textDiplay: ""
})
}
handleButton(e) {
        if(e.target.value.length >= 3) {
            this.setState({disabled: false }) 
        }
    }


render() {
    
    return(

    <div >
                <form className="my-form" onSubmit= {this.handlesubmit} onChange= {this.handleButton}>
                    <div id="input-1">
                        <label name= "name"></label>
                        <input 
                        id="my-input"
                        type= "text"  
                        name="firstName" 
                        value= {this.state.firstName} 
                        onChange= {this.handleFirstName }
                        placeholder= "First Name"
                        />
                    </div>
                    <div id="input-2" >
                        <input 
                        type="text" 
                        name= "lastName" 
                        value= {this.state.lastName} 
                        onChange= {this.handleFirstName} 
                        placeholder= "Last Name"/>
                    </div>
                    <div id="input-3">
                        <input 
                        type= "text" 
                        name= "email" 
                        value={this.state.email} 
                        onChange= {this.handleFirstName} 
                        placeholder= "email"/>
                    </div>
                    <div id="input-4">
                        <input 
                        type="placeOfBirth" 
                        name="placeOfBirth" 
                        value={this.state.placeOfBirth} 
                        onChange= {this.handleFirstName} 
                        placeholder= "Place of Birth"/>
                    </div>
                    <div id="input-5">
                        <input 
                        type= "tel" 
                        name="phone" 
                        value= {this.state.phone} 
                        onChange= {this.handleFirstName}
                        placeholder= "Phone"/>
                        
                    </div>
                    <div id="input-6">
                        <input 
                        type="text" 
                        name="favoriteFood" 
                        value= {this.state.favoriteFood} 
                        onChange= {this.handleFirstName}
                        placeholder= "Favorite Food"/>
                    </div>
                    <textarea 
                    id="my-area" 
                    name="textDiplay" 
                    value= {this.state.textDiplay} 
                    placeholder="Tell us about yourself" 
                    onChange= {this.handleFirstName}/>
                    <button 
                    id="my-button" 
                    name= "disabled"  
                    disabled= {this.state.disabled} >Submit</button>
                </form>
                <BadgeList
                badgeData= {this.state.badgeData}
                />
    </div>
    )

       
    
    }
}

export default Form