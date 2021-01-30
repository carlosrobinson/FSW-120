import React from "react"

class Add extends React.Component {
    constructor() {
        super()
        this.state = {
            num1: "",
            num2: "",
            calculate: []
        }
        
    }
    handleClick = (e) => {
        e.preventDefault()
       this.setState({
           calculate: [this.state.num1 + this.state.num2],num1: "", num2: ""
       });
   
       };
       handleChange = (e) => {
           const { name, value } = e.target;
           this.setState({
             [name]: Number(value),
           });
         };


    render() {
        return (
            <div>
                <h1 id= "myheader">Add</h1>
                <main id= "main">
                <input          
                    name="num1"
                    value={this.state.num1}
                    type="number"
                    onChange={this.handleChange}
                    placeholder="Number1"
                    required
                    style={{height:"50px"}}/>
                <input
                 name="num2"
                 value={this.state.num2}
                 type="number"
                 onChange={this.handleChange}
                 placeholder="Number2"
                 required
                 style={{height:"50px"}}
                />
                <button 
                    name="button" 
                    id="add" 
                    onClick={this.handleClick}
                    style={{height:"50px"}}>Calculate
                </button>
                <h1 id = "calculate" >
                    {this.state.calculate }
                </h1>
            </main>
            <footer id= "footer">My Footer</footer>
            </div>
        )

    }
}

export default Add