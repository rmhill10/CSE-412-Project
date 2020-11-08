import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { ComputerPartsContextProvider } from './context/ComputerPartsContext';
import Home from "./routes/Home"

const App = () => {
    return (
        <ComputerPartsContextProvider>
            <div className="container">
                <Router>
                    <Switch>
                       <Route exact path="/" component={Home}/>
                    </Switch>
                </Router>
            </div>
        </ComputerPartsContextProvider>
    
    )
}

export default App;