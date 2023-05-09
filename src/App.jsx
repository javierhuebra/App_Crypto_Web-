
import imgLogo from './assets/images/chryptochecklogo.png'
import imgPlay from './assets/images/getitplaystore.png'
import imgBitcoin from './assets/images/bitcoin.png'
import './App.css'
import Spinner from 'react-bootstrap/Spinner';

import axios from 'axios';
import { useState, useEffect } from 'react'

import Formulario from './assets/components/Formulario'
import Cotizacion from './assets/components/Cotizacion'
import ModalCoso from './assets/components/ModalCoso';

const App = () => {
  const [moneda, setMoneda] = useState('')
  const [criptoMoneda, setCriptoMoneda] = useState('')

  const [consultarAPI, setConsultarAPI] = useState(false)
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)

  const [show, setShow] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (consultarAPI) {
        //Consultar la api para obtener la cotización

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda.value}&tsyms=${moneda.value}`
        const resultado = await axios.get(url)


        //cambio el estado para el spinner de carga
        setCargando(true)


        setTimeout(() => {

          //resultado.data.DISPLAY[criptoMoneda][moneda] es una forma de acceder porque las claves cambian
          setResultado(resultado.data.DISPLAY[criptoMoneda.value][moneda.value])

          setConsultarAPI(false)

          //cambio el estado para el spinner de carga
          setCargando(false)
        }, 2000)

      }

    }

    cotizarCriptomoneda()
    console.log('resultado es: ', resultado)
  }, [consultarAPI])

  const componente = cargando ? <div className='spinner-cont'><Spinner animation="border" variant="secondary" /></div> : <Cotizacion resultado={resultado} />

  return (
    <div className='containerr'>
      <div className='header'>
        <ModalCoso
          show={show}
          setShow={setShow}
        />
        <div className='img-logo'>
          <img src={imgLogo} alt="logo" className='imagen' />
        </div>
        <div className='brg-menu'
          onClick={()=>setShow(true)}
        >
          <div className='logo-bars'>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>
        </div>
      </div>

      <div className='main'>
        <div className='cont-selects'>
          <div className='title-cont'>
            <p className='title-text'>CRYPTO CHECK</p>
          </div>
          <Formulario
            moneda={moneda}
            criptoMoneda={criptoMoneda}
            setMoneda={setMoneda}
            setCriptoMoneda={setCriptoMoneda}
            setConsultarAPI={setConsultarAPI}
          />
          <img src={imgBitcoin} alt="bitcoin imagen" className='bit-img' />
          {componente}
        </div>
      </div>
      <div className='footer'>
        <a className='link-play' href="https://play.google.com/store/apps/details?id=com.notjust.cryptocheck" target='blank_'>
          <img src={imgPlay} alt="playstore logo" className='img-playstore' />
        </a>

      </div>
    </div>

  )
}

export default App
