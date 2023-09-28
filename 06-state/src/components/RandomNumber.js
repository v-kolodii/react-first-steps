import { useState } from 'react';
import generateRandomNumber from '../utils/generateRandomNumber';

function RandomNumber({ maxNum }) {
  const [randomNum, setRandomNum] = useState(generateRandomNumber(maxNum));
  const changeNumber = () => {
    setRandomNum(generateRandomNumber(maxNum));
  };

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeNumber}>Generate new Number</button>
    </div>
  );
}

export default RandomNumber;
