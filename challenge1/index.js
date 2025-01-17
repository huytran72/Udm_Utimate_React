import { StrictMode } from "react";
import { createRoot } from "react-dom";
import App from "./App";

function App() {
  return (
    <div className="card">
      <Avartar />
      <div className="data" 
           <Intro />    
            {/* Should contain one skill component */}
            <SkillList />
        </div>
    </div>
  );
}

function Avartar() {
    return <img src="https://randomuser.me/api/port" alt="avatar" />;
}

function Intro() {
    return (
        <div>
            <h2>John Doe</h2>
            <p>Full-stack web developer and teacher</p>
        </div>
    );
}

function SkillList() {
    return (
        <div>   
            <Skill skill='React' emoji=''/>
            <Skill />
            <Skill />
        </div>
    );
}

function Skill() {
    return <div className="skill">React</div>;
}

const rootElement = createRoot(document.getElementById("root"));
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
