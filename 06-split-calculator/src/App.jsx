import { useState } from "react";
import reactLogo from "./assets/react.svg";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {" "}
      {children}{" "}
    </button>
  );
}
export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((showAdd) => !showAdd);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />

        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {" "}
          {showAddFriend ? "Close" : "Add friend"}{" "}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function FriendList() {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3> {friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.anme} {Math.abs(friend.balance)} $
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)} $
        </p>
      )}

      {friend.balance === 0 && <p>You owe {friend.anme} are even</p>}
      <Button> Select</Button>
    </li>
  );
}

//NOTES building static
function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label> 👫 Friend name </label>
      <input type="text" />

      <label> 🌇 Image URL </label>
      <input type="text" />

      <Button> Add </Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2> Split a bill with X </h2>
      <label> 💰 Bill value</label>
      <input type="text" />

      <label> 🙆🏻‍♂️ Your Expense</label>
      <input type="text" />

      <label> 👫 X's expense</label>
      <input type="text" disabled />
      <label> 🤑 Who is paying the bill</label>
      <select className="select">
        <option value="user"> You</option>
        <option value="friend"> X </option>
      </select>

      <Button> Add </Button>
    </form>
  );
}
