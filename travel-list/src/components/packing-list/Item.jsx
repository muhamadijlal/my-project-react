const Item = ({ item, onHandleToggleItem, onHandleRemoveItem }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onHandleToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onHandleRemoveItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
