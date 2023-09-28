function PetInfo(props) {
  const { animal, age, hasPet } = props;
  // CONDITIONAL RENDERING
  // const text = hasPet ? `My ${animal} is ${age} years old` : "I don't have pet";

  // return <h1>{text}</h1>;
  // OR:
  return hasPet ? (
    <h1>{`My ${animal} is ${age} years old`}</h1>
  ) : (
    <h2>I don't have pet</h2>
  );
}

export default PetInfo;
