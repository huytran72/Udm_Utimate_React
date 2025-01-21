const messages = ["Learn React", "Apply for jobs", "Invest your new income"];

export default function App() {
  const step = 1;

  return (
    <div className="steps">
      <div className="numbers">
        <div className="active">1</div>
        <div>2</div>
        <div>3</div>
      </div>

      <p className="message">Hello</p>

      <div className="button">
        <button style={{ backgroundColor: "#79550f2", color: "#fff" }}>
          Next
        </button>
        <button style={{ backgroundColor: "#79550f2", color: "#fff" }}>
          Previous
        </button>
      </div>
    </div>
  );
}
