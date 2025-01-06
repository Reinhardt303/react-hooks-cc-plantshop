import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantListings, setPlantListings] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(plantListings => setPlantListings(plantListings))
  },[])

  function handleAddListing(newListing) { 
      const upDatedListingsArray = [...plantListings, newListing]
      setPlantListings(upDatedListingsArray)
  }
  console.log(plantListings)
  const filteredListings = plantListings.filter((plantListing) => {
    return plantListing.name.toLowerCase().includes(search.toLowerCase())
  })
  
  function handleSearch(newSearch) {
    setSearch(newSearch)
  }

  function handleDeleteListing(id) {
    const updatedListingsArray = plantListings.filter(listing => listing.id !== id)
    setPlantListings(updatedListingsArray)
  }

  function handleUpdateItem(updatedItem) {
    const updatedItems = plantListings.map((plantListing) => {
      if (plantListing.id === updatedItem.id) {
        return updatedItem;
      }
      else {
        return plantListing;
      }
    })
    setPlantListings(updatedItems)
  }

  return (
    <main>
      <NewPlantForm onAddListing={handleAddListing} />
      <Search onSearch={handleSearch} />
      <PlantList onDeleteListing={handleDeleteListing} search={search} filteredListings={filteredListings} handleUpdateItem={handleUpdateItem} />
    </main>
  );
}

export default PlantPage;
