import React from "react";
import fakeData from "../../fakeData";

const Inventory = () => {
  const handleAddInventory = () => {
    const product = fakeData[0];
    fetch("http://localhost:4200/addProduct", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(fakeData)
    })
      .then(res => res.json())
      .then(data => {
        console.log("post successful");
      });
  };
  return (
    <div>
      <h4>Add Inventory to sell</h4>
      <button className="btn btn-primary" onClick={handleAddInventory}>
        Add Inventory
      </button>
    </div>
  );
};

export default Inventory;
