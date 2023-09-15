/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import doctorImage from '/images/doctor.jpg'; // Importa la imagen

const Favs = () => {
  // Inicializamos el estado de favoritos con los datos del localStorage
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  useEffect(() => {
    // Actualizamos el localStorage cada vez que se modifica el estado de favoritos
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleAddToFavorites = (id) => {
    // Filtramos el dentista con el id especificado
    const updatedFavorites = favorites.filter(favorite => favorite.id !== id);
    setFavorites(updatedFavorites);
    alert('Dentista eliminado de favoritos');
  };

  return (
    <div>
      <h1>Dentist Favs</h1>
      <div className="card-list-container">
        {favorites.map(dentist => (
          <div className="card" key={dentist.id}>
            <img src={doctorImage} alt="Doctor" className="doctor-image" />
            <h3>{dentist.name}</h3>
            <p>{dentist.username}</p>
            <button className="favButton" onClick={() => handleAddToFavorites(dentist.id)}>⭐</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favs;
