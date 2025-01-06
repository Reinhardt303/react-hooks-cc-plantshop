import React, {useState} from "react";

function NewPlantForm({onAddListing}) {
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  function handleAddSubmit(event) {
    event.preventDefault()
    const formData = ({image, name, price})

    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData) //if add plant fails, check here
    })
    .then(r => r.json())
    .then(newListing => {
      onAddListing(newListing)
    })

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleAddSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={event => setName(event.target.value)} />
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={event => setImage(event.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={event => setPrice(event.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
