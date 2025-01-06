import React from "react";
import PlantCard from "./PlantCard";

function PlantList({filteredListings, onDeleteListing, handleUpdateItem }) {
  const plantListingCards = filteredListings.map(plantListingObj => {
    return <PlantCard key={plantListingObj.id} plantListing={plantListingObj} onDeleteListing={onDeleteListing} handleUpdateItem={handleUpdateItem} />
  })

  

  return (
    <ul className="cards">{plantListingCards}</ul>
  );
}

export default PlantList;
