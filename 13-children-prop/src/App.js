import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue" margin="20px auto">
        <h2>Text inside of wrapper</h2>
        <button>Like!</button>
      </Wrapper>
      <Wrapper color="lightgreen" margin="20px auto">
        <h2>Another Text inside of wrapper</h2>
        <p>Descript</p>
        <input type="text" placeholder="Enter text..." />
      </Wrapper>
    </div>
  );
}

export default App;
