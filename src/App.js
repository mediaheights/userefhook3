import "./App.css";
import { useState, useEffect, useRef } from "react";
import Header from './components/Header';

function App() {
  const [input, setInput] = useState("");
  const inputField = useRef();

  const formHandler = (e) => {
    setInput(e.target.value);
  }

  const clickHandler = () => {
    if (inputField.current) {
      inputField.current.focus();
      // inputField.current.value = 'Real';
    }
  }

  return (
    <>
      <Header />

      <input ref={inputField} value={input} onChange={formHandler} />
      <button onClick={clickHandler}>Click Me</button>
    </>
  );
}

export default App;
