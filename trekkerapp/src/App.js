import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

mport React from "react";
 import ReactDOM from "react-dom/client";


    const heading = () => (
    <h1 id="title" key="h2">Nmaste React</h1>); 

    const HeaderComponent = () => {
        return (
        <div className="navbar">
           < heading />
        <div>
             <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li></li>
             </ul> 

        </div>
        </div>
        );
    }

    const TravelApp = () => {

    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
  
    root.render(<TravelApp />);
   
