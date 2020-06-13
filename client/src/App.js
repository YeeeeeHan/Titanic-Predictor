import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
// import Pokedex from "./Pokedex";

const App = () => (
    <Switch>
        <Route exact path="/" render={(props) => <Landing {...props} />} />
        {/*<Route exact path="/:pokemonId" render={(props) => <Pokemon {...props} />}/>*/}
    </Switch>
);

export default App;

