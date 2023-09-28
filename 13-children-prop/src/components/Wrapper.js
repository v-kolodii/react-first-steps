function Wrapper(props) {
  const style = {
    backgroundColor: props.color,
    margin: props.margin,
    padding: '10px',
    width: '250px',
  };
  return <div style={style}>{props.children}</div>;
}

export default Wrapper;
