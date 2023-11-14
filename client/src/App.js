import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./views/landing/Landing";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import Create from "./views/Create/Create";
import Navjar from "./componentes/Navjar/Navjar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route  path="*" render={() => <Navjar />} />
        <Switch>
          <Route exact path="/" render={() => <Landing />} />
          <Route path="/home" render={() => <Home />} />
          <Route path="/detail/:id" render={() => <Detail />} />
          <Route path="/create" render={() => <Create />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
