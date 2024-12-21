import { useState } from "react";
function FriendForm({ handleAddFriend }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !url) return;
    const id = Date.now();
    const friend = {
      id: `${id}`,
      name: name,
      image: `${url}?=${id}`,
      balance: 0,
    };
    handleAddFriend(friend);
    setName("");
    setUrl("https://i.pravatar.cc/48");
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="form-add-friend">
        <p>👨🏼‍🤝‍👨🏼Friend Name</p>
        <input value={name} onChange={(e) => setName(e.target.value)} id="input1" type="text"/>

        <label htmlFor="input2">📷 image URL</label>
        <input value={url} onChange={(e) => setUrl(e.target.value)} id="input2" type="text"/>

        <button className="button">Add</button>
      </form>
    </>
  );
}

export default FriendForm;
