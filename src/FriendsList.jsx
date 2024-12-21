import Friends from './Friends';
import './index.css'
function FriendsList({friends,handleSelectedFriend,selectedFriend}) {
  
    return (
    <ul>
        {friends.map((friend)=><Friends selectedFriend={selectedFriend} handleSelectedFriend={handleSelectedFriend} friend={friend} key={friend.id}/>)} 
    </ul>
    )
}

export default FriendsList
