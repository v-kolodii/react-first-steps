// function Button({ count, onClick }) {
//   return (
//     <button
//       onClick={() => {
//         onClick(count + 1);
//       }}
//     >
//       Click me
//     </button>
//   );
// }

// export default Button;

//button is not need know about count OR:
function Button({ onClick, buttonText }) {
  return <button onClick={onClick}>{buttonText}</button>;
}

export default Button;
