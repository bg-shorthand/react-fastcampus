import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React" />
        <p>
          <code>src/App.js</code> 파일을 수정하면 자동으로 새로고침 됩니다.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          리액트 배우기
        </a>
      </header>
    </div>
  );
}

export default App;
