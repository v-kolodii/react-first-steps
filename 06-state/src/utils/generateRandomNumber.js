function generateRandomNumber(maxNum) {
  const num = Math.random();
  console.log('num: ', num);
  console.log('num * maxNum - ', num * maxNum);
  return Math.floor(num * maxNum);
}

export default generateRandomNumber;
