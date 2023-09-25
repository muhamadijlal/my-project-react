/* eslint-disable react/prop-types */
import Button from "../Button";

const Friend = ({ friend, selectedFriend, onSelection }) => {
  const selected = selectedFriend?.id === friend.id;

  return (
    <li className={selected ? "active" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onSelection(friend)}>
        {selected ? "Close" : "Open"}
      </Button>
    </li>
  );
};

export default Friend;
