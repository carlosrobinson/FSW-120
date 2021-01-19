import React, {Component} from "react" 

class App extends Component {
    constructor() {
        super()
        this.state = {
            surprise: "Carlos, Mike, John"
             
        }
        this.handleChange = this.handleChange.bind(this)
        // this.handleClick = this.handleClick.bind(this)
    }
    
    handleChange(event) {
        this.setState({surprise:event.target.value
        })
    }
    
    addItem = (event)=> {
        
        this.setState({surprise:<li>{this.state.surprise}</li>})
        event.preventDefault();
    }
    
    
    render() {
        
        return(
            <form>
                <input type= "text" value={`${this.state.surprise}`}  onChange={this.handleChange}/>
                <h1>{this.state.surprise }</h1>
                <button onClick={this.addItem}  >click</button>
                <ol id="my-ol"   onClick={this.addItem}>
                {this.state.surprise}
                </ol>
            </form>

        )
    }
}

export default App