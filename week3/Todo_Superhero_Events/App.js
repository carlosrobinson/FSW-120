import React from "react";
import data from "./data.json";
import HeroData from "./HeroData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            heroes: data
        }
    }
    render() {

        const heroData = data.map(item => 
            <HeroData 
            item = {item}
            />)
            return(
                <div>
                    {heroData}
                </div>
            )
    
    }
}

export default App;