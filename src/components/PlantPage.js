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

  return (
    <main>
      <NewPlantForm onAddListing={handleAddListing} />
      <Search onSearch={handleSearch} />
      <PlantList search={search} filteredListings={filteredListings} />
    </main>
  );
}

export default PlantPage;
