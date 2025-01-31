export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Travelling 💼</h1>;
}

function Form() {
  return (
    <div className="add-from">
      <h3>What do you need for your trip?</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">LIST</div>;
}

function statusbar() {
  return (
    <footer>
      You have X items in your list, and you already packed Y items.
    </footer>
  );
}
