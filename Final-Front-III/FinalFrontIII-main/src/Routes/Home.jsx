/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context.jsx'; // Asegúrate de importar el contexto
import '../styles/Dark.css'; // Asegúrate de importar el archivo CSS
import CardList from "../Components/CardList.jsx"; // Asegúrate de importar el componente

const Home = () => {
  const { theme } = useContext(ContextGlobal);

  return (
    <main className={theme === 'dark' ? 'dark-mode' : ''}>
      <h1>Home</h1>
      <div className='card-grid'>
        <CardList /> {/* Renderizamos la lista de tarjetas */}
      </div>
    </main>
  )
}

export default Home;
