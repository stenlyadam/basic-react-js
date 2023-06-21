import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./HelloWorld";
import Header from "./Header";
import { useState, useEffect } from "react";

//Comment outside JSX
function App() {
  const [hello, setHello] = useState("Hello World");
  const [students, setStudents] = useState([]);
  // let hello = "Hello World";

  const handleClick = () => {
    // hello = "Selamat Datang";
    setHello("Selamat Datang");
  };

  console.log("Component is rendered");

  useEffect(() => {
    console.log("Component did mount");
  }, []);

  useEffect(() => {
    console.log("Component did update");
  }, [hello]);

  return (
    <>
      {/* Comment inside JSX */}
      <h1>{hello}</h1>
      <HelloWorld
        text="Hello World"
        subTitle="Welcome to my website"
        number={20}
        handleClick={handleClick}
      />
      {/* <HelloWorld text="Welcome" />
      <Header>
        <p>This is header</p>
        <p>This is header</p>
        <p>This is header</p>
      </Header> */}
    </>
  );
}

export default App;
