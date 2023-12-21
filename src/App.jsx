import "./App.css";
import { useState } from "react";

function App() {
  const [buttonState, setButtonState] = useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{buttonState}</div>
      <div className="buttons">
        <button
          onClick={() => {
            setButtonState("สวัสดี!");
          }}
        >
          สวัสดี!
        </button>
        <button
          onClick={() => {
            setButtonState("Hi!");
          }}
        >
          Hi!
        </button>
        <button
          onClick={() => {
            setButtonState("你好!");
          }}
        >
          你好!
        </button>
      </div>
    </div>
  );
}

export default App;
