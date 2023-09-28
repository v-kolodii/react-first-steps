import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const resetButtonStyle = { backgroundColor: 'lightgreen' };

  return (
    <div className="App">
      <Counter count={count} />
      {/* <Button count={count} onClick={setCount} /> in this case button know about count */}
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      {/* coiunt > 0 or !!count */}
      {count > 0 && (
        <div>
          <button style={resetButtonStyle} onClick={resetCount}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
