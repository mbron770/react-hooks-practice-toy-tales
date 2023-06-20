import React, {useState} from "react";

function ToyForm({addToy}) {
  const [newToyName, setNewToyName] = useState('')
  const [newToyImage, setNewToyImage] = useState('')
  const URL = 'http://localhost:3001/toys'

  function handleNewToyName(e){
    setNewToyName(e.target.value)
  }

  function handleNewToyImage(e){
    setNewToyImage(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()

    fetch(URL, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
        'Accept': 'application/json' 
      }, 
      body: JSON.stringify({key: newToyName, name: newToyName, image: newToyImage, likes: 0})
    } ).then(response => response.json())
    .then(addToy).catch(error => alert(error.message))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit = {handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value = {newToyName}
          onChange = {handleNewToyName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value = {newToyImage}
          onChange = {handleNewToyImage}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
