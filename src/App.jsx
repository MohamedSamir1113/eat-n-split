import { useState } from "react";
import BillForm from "./BillForm";
import FriendForm from "./FriendForm";
import FriendsList from "./FriendsList";
import Button from "./Button";

export default function App() {
  
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
  const [friends, setFriends] = useState(initialFriends);
  const [addBtn, setAddBtn] = useState(false);
  const [selectedFriend,setSelectedFriend]=useState(null)
  console.log(selectedFriend);
  function handleAddFriend(friend) {
    setFriends(friends=>[...friends,friend])
    setAddBtn(false)
  }
  
  function toggleAddBtn() {
   setAddBtn((show )=>!show)
  }

  function handleSelectedFriend(friend) {
   setSelectedFriend((selected)=>selected?.id===friend.id ?null :friend)
   //console.log(selectedFriend?.id);
   setAddBtn(false)
   }
 
function handleSplitBill(value) {
  console.log(value);
  setFriends(friends=>friends.map((friend)=>friend.id===selectedFriend.id?{...friend,balance:friend.balance+value}:friend))
}

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList selectedFriend={selectedFriend} handleSelectedFriend={handleSelectedFriend} friends={friends}/>
        {addBtn?<FriendForm handleAddFriend={handleAddFriend}/>:""}
        <Button toggleBtn={toggleAddBtn}>{addBtn?"Close":"Add Friend"}</Button>
      </div>
      {selectedFriend && <BillForm handleSplitBill={handleSplitBill} key={selectedFriend.name} setSelectedFriend={setSelectedFriend} selectedFriend={selectedFriend}/>}
      
    </div>
  );
}
