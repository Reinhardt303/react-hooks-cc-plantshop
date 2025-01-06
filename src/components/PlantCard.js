import React, {useState} from "react";

function PlantCard({plantListing, onDeleteListing, handleUpdateItem}) {
  const [inStock, setinStock] = useState(true)
  
  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plantListing.id}`, {
      method: "DELETE"
    })
    .then(r =>r.json())
    .then(() =>{
      onDeleteListing(plantListing.id)
    })
  }

  function handleChange(event) {
    fetch(`http://localhost:6001/plants/${plantListing.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: event.target.value,
      }),
    })
      .then((r) => r.json())
      .then((updatedPrice) => handleUpdateItem(updatedPrice));
    console.log(event.target.value)
  }
  
  return (
    <li className="card" data-testid="plant-item">
      <img src={plantListing.image} alt={plantListing.name} />
      <h4>{plantListing.name}</h4>
      <p>Price: {plantListing.price}</p>
      <input type="number" name="price" step="0.01" placeholder="Update Price" onChange={handleChange} />
      {inStock ? (
        <button onClick={() => setinStock(false)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setinStock(true)}  >Out of Stock</button>
      )}
      <button className="delete" onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
