import { useState } from "react";

const InputListItem = ({ onNextItem }) => {
  const quantityNum = [...Array(10)].map((_, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return;

    const nextItem = {
      id: Date.now(),
      name,
      quantity,
      checked: false,
    };
    onNextItem(nextItem);

    setName("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {quantityNum}
        </select>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="nama barang..."
        />
      </div>
      <button>Tambah</button>
    </form>
  );
};

export default InputListItem;
