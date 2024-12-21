import { useState } from "react";
import Button from "./Button";

function BillForm({selectedFriend,setSelectedFriend,handleSplitBill}) {
  const [bill,setBill]=useState("")
  const [userExpense,setUserExpense]=useState("")
  const [payment,setPayment]=useState("user")
  const friendExpense=bill?bill-userExpense:""
  
  function handleSubmit(e) {
    e.preventDefault()
   
   handleSplitBill(payment === "user"?friendExpense:-userExpense)
   setSelectedFriend(null)
  }
  

  return (
    <>
      <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split Bill with {selectedFriend.name}</h2>
        <label htmlFor="input1">💰 Bill value</label>
        <input id="input1" value={bill} onChange={(e)=>setBill(Number(e.target.value))} type="number" />

        <label htmlFor="input2">🧍‍♂️ Your Expense</label>
        <input value={userExpense} onChange={(e)=>setUserExpense(Number(e.target.value) > bill ?userExpense:Number(e.target.value))} id="input2" type="number" />

        <label htmlFor="input3">👨🏼‍🤝‍👨🏼 {selectedFriend.name}'s Expense</label>
        <input disabled value={friendExpense} id="input3" type="text" />

        <label htmlFor="input4">🤑 who is paying the bill?</label>
        <select value={payment} onChange={(e)=>setPayment(e.target.value)} name="" id="input4">
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
        </select>

        <Button>Split Bill</Button>
      </form>
    </>
  );
}

export default BillForm;
