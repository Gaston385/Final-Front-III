// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../styles/Footer.css'; // Asegúrate de importar el archivo CSS

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer onClick={scrollToTop}>
        <p>Powered by, Brahian Puschiasis</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
