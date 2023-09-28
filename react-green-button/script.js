// const App = () => {
//   const [buttonText, setButtonText] = React.useState('Click me');

//   const [classList, setClassList] = React.useState('ffff');
//   const onButtonClick = () => {
//     setButtonText('Hello buddy!');
//     const listCl = classList + ' ' + 'green-btn';
//     setClassList(listCl);
//   };
//   return (
//     <div className="app">
//       <button className={classList} onClick={onButtonClick}>
//         {buttonText}
//       </button>
//     </div>
//   );
// };

// const container = document.getElementById('app');
// const root = ReactDOM.createRoot(container);
// root.render(<App />);

const App = ({ initialButtonText }) => {
  // const App = (props) => {
  //   const { initialButtonText } = props;

  const [buttonText, setButtonText] = React.useState(initialButtonText);

  const [classList, setClassList] = React.useState('');
  const onButtonClick = () => {
    setButtonText('Hello buddy!');
    const newClass = 'green-btn';
    setClassList(newClass);
  };
  return (
    <div className="app">
      <button className={classList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click Me" />);

const App2 = ({ initialButtonText, initialClassList }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText);

  const [classList, setClassList] = React.useState(initialClassList);
  const onButtonClick = () => {
    setButtonText('Hello buddy!');
    const newClass = 'green-btn';
    setClassList(newClass);
  };
  return (
    <div className="app">
      <button className={classList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container2 = document.getElementById('app');
const root2 = ReactDOM.createRoot(container2);
root.render(<App2 initialButtonText="Click Me Please" initialClassList="" />);
