import React from "react";
import Home from "./Home";
import About from  "./About";
import Contact from "./Contact";
import Service from "./Service";
import { Route, Switch } from "react-router-dom";


const App = () => {
      return (
<>
<Switch>
<Route path="/"  component={Home} />
<Route path="about" component={About} />
<Route path="service" component={Service} />
<Route path="contact" component={Contact} />
</Switch>
</>
      );
};
export default App;
