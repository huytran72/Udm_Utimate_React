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
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
      <h3>What do you need for your trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
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
