const initialItems = [
  { id: 1, description: "Passport", quantity: 2, packed: true },
  { id: 2, description: "Phone charger", quantity: 12, packed: false },
  { id: 3, description: "Socks", quantity: 3, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Travelling 💼</h1>;
}

function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for your trip?</h3>
      <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
      <input type="text" placeholder="Item..." />
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>

      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      You have X items in your list, and you already packed Y items.
    </footer>
  );
}
