//Cara membuat komponen
const HelloWorld = ({ text, subTitle, number, handleClick }) => {
  return (
    <div>
      <p>{text}</p>
      <p>{subTitle}</p>
      <p>{number}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default HelloWorld;
