import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, NotFound, About } from "./pages/index";

import Navigation from "./components/Navigation";
import "./styles/index.scss";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
