import { StrictMode } from "react";
import { createRoot } from "react-dom";
import App from "./App";

function App() {
  return (
    <div className="card">
      <Avartar />
      <div className="data" 
           <Intro />    
              
            <SkillList />
    </div>
  );
}

const rootElement = createRoot(document.getElementById("root"));
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
