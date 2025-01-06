import React, {useState} from "react";

function PlantCard({plantListing}) {
  const [inStock, setinStock] = useState(true)
  
  return (
    <li className="card" data-testid="plant-item">
      <img src={plantListing.image} alt={plantListing.name} />
      <h4>{plantListing.name}</h4>
      <p>Price: {plantListing.price}</p>
      {inStock ? (
        <button onClick={() => setinStock(false)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setinStock(true)}  >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
