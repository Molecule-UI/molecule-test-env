import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Button } from "@molecule-ui/react";
function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch ></Switch>
      </Router> */}
      <Button color="danger">hi</Button>
    </div>
  );
}

export default App;
