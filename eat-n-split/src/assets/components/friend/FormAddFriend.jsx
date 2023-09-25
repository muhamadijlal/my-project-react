/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../Button";

const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 99);

    const newFriend = {
      id,
      name,
      image: imageURL + "?u=" + id,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌄 Image URL</label>
      <input
        type="text"
        value={imageURL}
        disabled
        onChange={(e) => setImageURL(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
