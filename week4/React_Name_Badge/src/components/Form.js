import React, { Component } from "react";
import "./Form.css";
import BadgeList from "./BadgeList";

class Form extends  Component{
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favFood: "",
            textBox: "",
            disabled: true, 
            badgeData: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleButton = this.handleButton.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        let phoneNumber = this.state.phone
        let first3 = phoneNumber.slice(0, 3)
        let next3 = phoneNumber.slice(3, 6)
        let last4 = phoneNumber.slice(6)
        let phoneNumWithDashes = first3 + "-" + next3 + "-" + last4
    const data= {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        placeOfBirth: this.state.placeOfBirth,
        phone: phoneNumWithDashes,
        favFood: this.state.favFood,
        textBox: this.state.textBox     
    }        
    this.setState({badgeData : [data, ...this.state.badgeData], 
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favFood: "",
            textBox: ""
        })
    }

    handleChange =(e) => {
        e.preventDefault()
        const {name, value} = e.target
        this.setState({[name]:value})
    }

    handleButton(e) {
        e.preventDefault()
        if(e.target.value.length >= 3) {
            this.setState({disabled: false }) 
        }
    }

    render() {

        return(
            <div className="div-form">
                <form 
                    className="main-form" 
                    onSubmit= {this.handleSubmit} 
                    onChange={this.handleButton}
                >
                    <div className="form-a">
                        <input
                            text="text" 
                            name="firstName"
                            value={this.state.firstName}
                            placeholder="First Name"
                            onChange= {this.handleChange}
                            />
                        <input 
                            text="text" 
                            name="lastName"
                            value={this.state.lastName}
                            placeholder="Last Name"
                            onChange= {this.handleChange}
                            />
                            
                    </div>
    
                    <div className="form-b">
                        <input
                            text="text" 
                            name="email"
                            value={this.state.email} 
                            placeholder="Email"
                            onChange= {this.handleChange}
                            />
                        <input 
                            text="text" 
                            name="placeOfBirth"
                            value={this.state.placeOfBirth}
                            placeholder="Place of Birth"
                            onChange= {this.handleChange}
                            />
                    </div>
    
                    <div className="form-c">
                        <input 
                            id= "my-phone"
                            text="text" 
                            name="phone"
                            value={this.state.phone}
                            placeholder="Phone"
                            onChange= {this.handleChange}
                            />
                        <input 
                            text="text" 
                            name="favFood"
                            value={this.state.favFood}
                            placeholder="Favorite Food"
                            onChange= {this.handleChange}
                            />
                    </div >
    
                    <div className="form-d">
                        <textarea
                            text="text" 
                            name="textBox"
                            value={this.state.textBox} 
                            placeholder="Tell us about yourself"
                            onChange= {this.handleChange}
                            />
                    <button
                        name= "disabled"  
                        disabled= {this.state.disabled} 
                    >Submit</button>
                    </div>
                </form>
                    <BadgeList
                        badgeData ={this.state.badgeData}
                    />
            </div>

        )
    }
}

export default Form;