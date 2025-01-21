export default function App() {
  return (
    <div className="steps">
      <div className="numbers">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>

      <p className="message">Hello</p>

      <div className="button">
        <button style={{ backgroundColor: "#79550f2", color: "#fff" }}>
          Next
        </button>
        <button>Previous</button>
      </div>
    </div>
  );
}
