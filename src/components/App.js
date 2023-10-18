import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Socks", quantity: 12, packed: false },
  { id: 4, description: "Socks", quantity: 12, packed: true },
];

function App() {
  const [items, setItems] = useState([]);

  //item is the value got from the form
  //items the previous state
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
    console.log(items);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((items) => items.id !== id));
  }

  function handleToggldItems(id) {
    setItems((items) =>
      items.map((items) =>
        items.id === id ? { ...items, packed: !items.packed } : items
      )
    );
  }

  function handleRest() {
    setItems([]);
  }
  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeletingItem={handleDeleteItems}
        onChecked={handleToggldItems}
        onClickRest={handleRest}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
