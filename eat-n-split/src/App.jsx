import { useState } from "react";
import FormBill from "./assets/components/bill/FormBill";
import FormFriend from "./assets/components/friend/FormFriend";
import initialFriends from "./data";

const App = () => {
  const [friends, setFriends] = useState(initialFriends);

  const handleNewFriends = (friend) => {
    setFriends([...friends, friend]);
  };

  return (
    <div className="app">
      <FormFriend friends={friends} onNewFriends={handleNewFriends} />
      <FormBill />
    </div>
  );
};

export default App;
