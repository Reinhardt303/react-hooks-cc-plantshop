import React from "react";
import PlantCard from "./PlantCard";

function PlantList({filteredListings }) {
  const plantListingCards = filteredListings.map(plantListingObj => {
    return <PlantCard key={plantListingObj.id} plantListing={plantListingObj} />
  })

  

  return (
    <ul className="cards">{plantListingCards}</ul>
  );
}

export default PlantList;
