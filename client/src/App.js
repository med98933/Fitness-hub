import React from "react";
import './App.css';
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from "./componenets/Navbar/Navbar";
import Footer from "./componenets/Footer/Footer";
import Exercices from "./pages/Exercices";
import Dashboard from "./pages/Dashboard";


function App() {
    return(
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/Exercices">
                        <Exercices />
                    </Route>
                    <Route exact path="/Dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
                
                <Footer />
            </div>
        </Router>
        
    );
}

export default App;