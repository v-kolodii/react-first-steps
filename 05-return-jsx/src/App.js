import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age={3} hasPet={true} />
      <PetInfo animal="dog" age={5} hasPet />
      <PetInfo hasPet={false} />
    </div>
  );
}

export default App;
