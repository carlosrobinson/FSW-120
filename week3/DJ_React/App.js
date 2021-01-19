import React from "react"

import Square from "./Square"





class App extends React.Component {

    constructor() {
        super()
        this.state = {
            colors: ["white", "white", "white", "white"] 
            }
            this.handleClick = this.handleClick.bind(this)
            this.handleClick2 = this.handleClick2.bind(this)
            this.handleClick3 = this.handleClick3.bind(this)
            this.handleClick4 = this.handleClick4.bind(this)
            this.handleClick5 = this.handleClick5.bind(this)
            this.handleClick6 = this.handleClick6.bind(this)
            this.handleClick7 = this.handleClick7.bind(this)
            this.handleClick8 = this.handleClick8.bind(this)
}
handleClick()  {
    this.setState({colors: ["black", "white", "black", "white"]})

}
handleClick2()  {
    this.setState({colors: ["purple", "purple", "white", "white"]})

}
handleClick3()  {
    this.setState({colors: ["white", "white", "blue", "white"]})

}
handleClick4()  {
    this.setState({colors: ["white", "blue", "white", "white"]})

}
handleClick5()  {
    this.setState({colors: ["purple", "blue", "red", "orange"]})

}
handleClick6()  {
    this.setState({colors: ["orange", "red", "blue", "purple"]})

}
handleClick7()  {
    this.setState({colors: ["green", "blue", "brown", "pink"]})

}
handleClick8()  {
    this.setState({colors: ["yellow", "grey", "teal", "red"]})

}

render() {
    return(
        <div class="myBox-grid">
                <Square    boxColor= {this.state.colors[0]}/>
    
                <Square  boxColor={this.state.colors[1]}/>
    
                <Square  boxColor={this.state.colors[2]}/>
    
                <Square  boxColor={this.state.colors[3]}/>
                <br/>
                <br/>
                <div>
                    <button onClick={this.handleClick}>Small Time DJ</button>
                    <button onClick={this.handleClick2}>Party DJ</button>
                    <button onClick={this.handleClick3}>Professional DJ</button>
                    <button onClick={this.handleClick4}>Professional DJ</button>
                    <button onClick={this.handleClick5}>Big Time DJ</button>
                    <button onClick={this.handleClick6}>Big Time DJ</button>
                    <button onClick={this.handleClick7}>Big Time DJ</button>
                    <button onClick={this.handleClick8}>Big Time DJ</button>
                </div>
            </div>
        )
    }
}


export default App