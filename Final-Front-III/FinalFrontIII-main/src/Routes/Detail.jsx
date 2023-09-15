// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import '../styles/Detail.css'; 

const Detail = () => {
  const { id } = useParams();
  const [dentistData, setDentistData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setDentistData(data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  if (!dentistData) {
    return <div>Cargando...</div>;
  }

  const { name, email, phone, website } = dentistData;

  return (
    <div className="detail-container">
      <h1>Detail dentist {id}</h1>
      <table>
        <tbody>
          <tr>
            <td>Nombre</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Teléfono</td>
            <td>{phone}</td>
          </tr>
          <tr>
            <td>Sitio Web</td>
            <td>{website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
