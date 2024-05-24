// import logo from './logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/11/175b85183ecedb529e14.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240524%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240524T201857Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=a689d1492dac8f73fa8a81d7e433cce504053ed18fb0f2e1de98189e0e2d3ffe"
          className="App-logo"
          alt="logo"
        />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email"></input>
          <label htmlFor="pass">Password: </label>
          <input type="password" id="pass"></input>
          <button type="button">OK</button>
        </form>
      </div>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;
