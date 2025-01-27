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
        <span>Count: {count}</span>
      </div>
    </div>
  );
}
