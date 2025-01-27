import "./styles.css";
import React from "react";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>Count: {count}</span>
      </div>
    </div>
  );
}
