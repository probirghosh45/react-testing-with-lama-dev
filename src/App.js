import logo from "./logo.svg";
import "./App.css";

function App() {

  const a = 5;
  const b= 10;

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
        <ul>
          <li>Arjun</li>
          <li>Krishna</li>
          <li>Judishthir</li>
        </ul>
      </header>
      <main>
        <p data-testid="title" >Hello React Testing</p>
        <span title="sum" >{a+b}</span>
      </main>
    </div>
  );
}

export default App;
