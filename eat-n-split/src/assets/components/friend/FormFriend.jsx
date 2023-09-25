/* eslint-disable react/prop-types */
import ListFriend from "./ListFriend";
import Button from "../Button";
import InputForm from "../InputForm";
import { useState } from "react";

const AddFriend = ({ friends, onNewFriends, setBill, bill }) => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("https://i.pravatar.cc/48");

  const handleShowAddFriend = () => {
    setShowAddFriend(!showAddFriend);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !imageURL) return;

    const id = Math.floor(Math.random() * 999999);
    const newFriends = {
      id,
      name,
      image: `${imageURL}?u=${id}`,
      balance: Math.floor(
        Math.round() > 0.5
          ? +Math.floor(Math.random() * 99)
          : -Math.floor(Math.random() * 99)
      ),
    };

    onNewFriends(newFriends);

    setName("");
    setShowAddFriend(false);
  };

  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => {
          return (
            <ListFriend
              key={friend.id}
              friend={friend}
              bill={bill}
              setBill={setBill}
            />
          );
        })}
      </ul>

      {showAddFriend && (
        <form className="form-add-friend" onSubmit={handleSubmit}>
          <InputForm
            isDisabled={false}
            value={name}
            onValueChange={(e) => setName(e.target.value)}
          >
            <span>🙌</span>
            Friend name
          </InputForm>
          <InputForm
            isDisabled={false}
            value={imageURL}
            onValueChange={(e) => setImageURL(e.target.value)}
          >
            <span>🖼️</span>
            Image URL
          </InputForm>
          <Button>Add</Button>
        </form>
      )}

      <Button onClick={handleShowAddFriend}>
        {showAddFriend ? "Close" : "Add friend"}
      </Button>
    </div>
  );
};

export default AddFriend;
