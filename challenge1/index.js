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
        <div className="skill-list">   
            {Skills.map(skill=><Skill skill={skill.skill} color={skill.color} emoji={skill.emoji} level={skill.level} />)}
        </div>
    );
}

function Skill({skill, color, emoji, level}) {}) {
    return <div className="skill" style={{backgroundColor: props.color}}>
        <span>{skill}</span>
        <span>{emoji}</span>
        <span>{color}</span>
        <span>{level}</span>
    </div>;
}

const rootElement = createRoot(document.getElementById("root"));
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
