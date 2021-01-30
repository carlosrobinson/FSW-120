import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import Add from "./Add"
import Subtract from "./Subtract"
import Multiply from "./Multiply"
import Divide from "./Divide"

    
function App(){
    
    return (
        <div>
            <nav id= "navbar">
                <Link  to="/" >Add</Link>
                <Link to="/subtract" >Subtract</Link>
                <Link to="/multiply" >Multiply</Link>
                <Link to="/divide" >Divide</Link>
            </nav>

            <Switch>
                <Route exact path="/">
                    <Add />
                </Route>

                <Route exact path="/Subtract">
                    <Subtract />
                </Route>

                <Route exact path="/Multiply">
                    <Multiply />
                </Route>
                <Route exact path="/Divide">
                    <Divide />
                </Route>
            </Switch>

        </div>
    )
}

export default App