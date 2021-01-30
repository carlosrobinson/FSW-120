import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Service from "./Service"

    
function App(){
    
    return (
        <div>
            <nav id= "navbar">
                <Link  to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/service" >Service</Link>
            </nav>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/about">
                    <About />
                </Route>

                <Route exact path="/service">
                    <Service />
                </Route>
            </Switch>
            <main id= "main">

            </main>
            <footer id= "footer">My Footer</footer>
        </div>
    )
}

export default App