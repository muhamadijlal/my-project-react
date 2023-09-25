/* eslint-disable react/prop-types */
import Button from "../Button";

const ListFriends = ({ friend, setBill, bill }) => {
  return (
    <li key={friend.id}>
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
      <Button
        onClick={() =>
          bill?.id !== friend?.id ? setBill(friend) : setBill(null)
        }
      >
        {bill?.id === friend?.id ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default ListFriends;
