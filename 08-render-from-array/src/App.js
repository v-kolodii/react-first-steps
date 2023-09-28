import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';

const text = [
  'Click me',
  'Click me, buddy!',
  'Yes! Hit me!',
  'You are crazy))!',
];
function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      {/* <Button count={count} onClick={setCount} /> in this case button know about count */}
      {/* <Button onClick={incrementCount} buttonText={text[0]} />
      <Button onClick={incrementCount} buttonText={text[1]} />
      <Button onClick={incrementCount} buttonText={text[2]} />
      <Button onClick={incrementCount} buttonText={text[3]} /> */}
      {text.map((el, index) => {
        return <Button onClick={incrementCount} buttonText={el} key={index} />; //without key we got error in console
      })}
    </div>
  );
}

export default App;
