import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route exact path="/about">
                        <About />
                    </Route>

                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
