import './App.css';
import RandomNumber from './components/RandomNumber';

function App() {
  return (
    <div className="App">
      <RandomNumber maxNum={50} />
    </div>
  );
}

export default App;
