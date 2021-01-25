import React from "react"
//import NewNames from "./NewNames"

// var newList = document.getElementById("ordered-list")
class Names extends React.Component{
    constructor() {
        super()
        this.state = {
            surprise: "",
            newNames:[] 
        }
        this.handleChange = this.handleChange.bind(this)
         this.handleSubmit = this.handleSubmit.bind(this)
    }
    //Capture input
    handleChange =(e) => {
        const {name, value} = e.target
        this.setState({[name]:value})
    }
    //Map input
    handleSubmit = (event)=> {
        var myOl = document.getElementById("my-Ol")
        var newLi = document.createElement("li")
        newLi.textContent = this.state.newNames
        myOl.append(newLi)
        this.setState({newNames:[this.state.surprise], surprise: ""})
            event.preventDefault();
    }
    
    render() {



        return(
            <div>
                <form  id="myform">
                    <input type= "text" value={this.state.surprise} name = "surprise"  onChange={this.handleChange}/>
                    <h1>{this.state.surprise }</h1>
                    <button onClick= {this.handleSubmit}>click</button>
                </form>
                <div>
                    <ol id ="my-Ol">
                        New Names:{this.state.newNames}
                    </ol>
                </div>
            </div>
        )
    }
}
export default Names