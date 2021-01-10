import React from "react";
import DiceBox from "./DiceBox";
import Die from "./Die";

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
        this.handleClick= this.handleClick.bind(this)
    }
    
    handleClick() {

    this.setState(prevState =>
        prevState + Math.floor(Math.random()) * 6
        )         
}
    render() {

        return(
            <div>

                <DiceBox/>
                <Die/>
                
            </div>
            )
    }
}


export default App