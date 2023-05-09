import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../stylesheets/ModalCoso.css'
import imgDoble from '../images/adasdas.png'
const ModalCoso = ({show, setShow}) => {
  

  const handleClose = () => setShow(false);
  

  return (
    <>
      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header >
          <Modal.Title>Información</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Crypto Check es una aplicación de consulta de 
          valores de activos en monedas de diferentes países.
          <img src={imgDoble} alt="imagen demo" className='img-doble' />
          En la parte inferior de la web se encuentra el link de descarga
          de la playstore.<br/>
          Es soportada por versiones de android superiores a 5.0 Lollipop.
          <hr/>
          Contacto: <a className='links linke' href="https://www.linkedin.com/in/javieremanuelhuebra/" target='blank_'>Linkedin</a> <a className='links git' href="https://github.com/javierhuebra" target='blank_'>GitHub</a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCoso