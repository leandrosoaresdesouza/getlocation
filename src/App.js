import ReactGA from "react-ga";
import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    function initializeReactGA() {
      ReactGA.initialize("UA-123791717-1");
      ReactGA.pageview("/");
    }

    initializeReactGA();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editttt <code>src/App.js</code> and saveeeeeeee to reloadd..
        </p>
      </header>
    </div>
  );
}

export default App;
