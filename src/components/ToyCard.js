import React from "react";


function ToyCard({id, name, image, likes, deleteToy, updateLikes}) {
  const URL = 'http://localhost:3001/toys'

  function handleDelete(){
    fetch(`${URL}/${id}`, {
      method: 'DELETE', 
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }, 
    }).then(response => response.json())
    .then(deleteToy({id, name, image, likes}))
    .catch(error => alert(error.message))
  }


  function handleLikes(){
    fetch(`${URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json' 
      },
      body: JSON.stringify({likes: likes + 1})
    }).then(response => response.json())
    .then(updateLikes).catch(error => alert(error.message))

  }




  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick = {handleLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick = {handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
