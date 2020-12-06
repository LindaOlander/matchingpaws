import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1> May Node and Express be with you.</h1>
        <form action="/dogs" method="POST">
            <input type="text" placeholder="name" name="name" />
            <input type="text" placeholder="quote" name="quote" />
            <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default App;
