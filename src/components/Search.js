import React, {useState} from "react";

function Search({onSearch}) {
  const [currentSearch, setCurrentSearch] = useState('')
  
  function handleSubmit(e) {
    e.preventDefault()
    onSearch(currentSearch)
  }


  return (
    <div className="searchbar" onSubmit={handleSubmit}>
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={currentSearch}
        onChange={(e) => setCurrentSearch(e.value.target)}
      />
    </div>
  );
}

export default Search;
