const PackingList = ({ items, onDeletingItem, onChecked, onClickRest }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            reusableItem={item}
            onDeletingItem={onDeletingItem}
            onChecked={onChecked}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <button onClick={onClickRest}>Rest</button>
      </div>
    </div>
  );
};

function Item({ reusableItem, onDeletingItem, onChecked }) {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          value={reusableItem.packed}
          onChange={() => onChecked(reusableItem.id)}
        />
        <span
          style={reusableItem.packed ? { textDecoration: "line-through" } : {}}
        >
          {reusableItem.quantity} {reusableItem.description}
        </span>
        <button onClick={() => onDeletingItem(reusableItem.id)}>❌</button>
      </li>
    </div>
  );
}

export default PackingList;
