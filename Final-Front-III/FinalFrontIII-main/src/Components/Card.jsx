/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import doctorImage from '/images/doctor.jpg'; // Importa la imagen
import '../styles/CardList.css'; // Asegúrate de importar el archivo CSS

const Card = ({ id, name, username,link }) => {



  const handleAddToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorite = favorites.some(favorite => favorite.id === id);



    if (!isFavorite) {
      const newFavorite = { id, name, username };
      favorites.push(newFavorite);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert('Dentista agregado a favoritos');
    } else {
      const updatedFavorites = favorites.filter(favorite => favorite.id !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      alert('Dentista eliminado de favoritos');
    }
  };

  return (
    <div className="card">
      <img src={doctorImage} alt="Doctor" className="doctor-image" />
      <h3>{link}</h3>
      <p>{username}</p>
      <button className="favButton" onClick={handleAddToFavorites}>⭐</button>
    </div>
  );
};



Card.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  id: PropTypes.number,
  link: PropTypes.element, // Asegúrate de definirlo como un elemento de React

};

export default Card;
