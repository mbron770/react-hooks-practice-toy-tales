import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  const URL = 'http://localhost:3001/toys' 

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch(URL)
    .then(response => response.json())
    .then(toys => setToys(toys))

  }, [])

  function addToy(newToy){
    setToys([...toys, newToy])
  }

  function deleteToy(deletedToy){
    setToys(toys.filter(toy => toy.id !== deletedToy.id))
  }

  function updateLikes(newLikes){
    setToys(toys.map(toy => toy.id === newLikes.id ? newLikes : toy))
  }

  

  

  return (
    <>
      <Header />
      {showForm ? <ToyForm  addToy = {addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys = {toys} deleteToy = {deleteToy} updateLikes = {updateLikes}/>
    </>
  );
}

export default App;
