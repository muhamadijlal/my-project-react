/* eslint-disable no-unused-vars */
import { useState } from "react";
import FormBill from "./assets/components/bill/FormBill";
import FormFriend from "./assets/components/friend/FormFriend";
import initialFriends from "./data";

const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [bill, setBill] = useState(null);

  // console.log(bill);

  const handleNewFriends = (friend) => {
    setFriends([...friends, friend]);
  };

  return (
    <div className="app">
      <FormFriend
        friends={friends}
        onNewFriends={handleNewFriends}
        setBill={setBill}
        bill={bill}
      />

      {bill && <FormBill bill={bill} />}
    </div>
  );
};

export default App;
