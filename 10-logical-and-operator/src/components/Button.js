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
function Button({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}

export default Button;
