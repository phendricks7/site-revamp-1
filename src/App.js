import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Marta Layne's son was here.
        </p>
        <h2>Latest news</h2>
        <p>Panama on strike Oct 31, 2023</p>
        <a
          className="App-link"
          href="https://www.instagram.com/elite_womenpty/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Elite Women PTY's Instagram
        </a>
      </header>
    </div>
  );
}

export default App;
