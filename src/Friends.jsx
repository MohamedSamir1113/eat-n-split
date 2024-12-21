import "./index.css";
import Button from "./Button";
function Friends({ friend,handleSelectedFriend,selectedFriend}) {
  
  return (
    <>
      <li className={selectedFriend===friend?"selected":""}>
        <img src={friend.image} alt={friend.name} /> 
        <h3>{friend.name}</h3>
        {friend.balance > 0 ?<p style={{color:"green"}}>{friend.name} owe you {friend.balance}$</p>:friend.balance <0?<p style={{color:"red"}}>You owe {friend.name} {-friend.balance}$</p> :<p>You and {friend.name} are even</p>}

        <Button toggleBtn={()=>handleSelectedFriend(friend)}>{selectedFriend===friend?"Close":"Select"}</Button>
      </li>
    </>
  );
}

export default Friends;
