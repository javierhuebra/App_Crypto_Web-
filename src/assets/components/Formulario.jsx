import { useState, useEffect } from 'react';
import Select from 'react-select';
import '../stylesheets/Formulario.css'
import axios from 'axios';
import Swal from 'sweetalert2'

const options = [

    { value: 'USD', label: 'Dolar de Estadus Unidos' },
    { value: 'ARS', label: 'Peso Argentino' },
    { value: 'EUR', label: 'Euro' },
    { value: 'GBP', label: 'Libra Esterlina' },
];



const Formulario = ({ moneda, criptoMoneda, setMoneda, setCriptoMoneda, setConsultarAPI}) => {
    const [trendingMoneys, setTrendingMoneys] = useState([])
    const [criptoMonedas, setCriptoMonedas] = useState([])


    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const resultado = await axios.get(url)

            setCriptoMonedas(resultado.data.Data)
            
        }
        consultarAPI()



    }, [])

    useEffect(() => {
        const cargarMonedas = () => {
            const moneys = criptoMonedas.map((cripto) => ({
                value: cripto.CoinInfo.Name,
                label: cripto.CoinInfo.FullName,
            }));
            setTrendingMoneys(moneys);
        };
        cargarMonedas();
    }, [criptoMonedas]);



    const cotizarPrecio = () => {
        if(moneda === '' || criptoMoneda === ''){
            mostrarAlerta()
            console.log(moneda)
            return
        }
        console.log("pasa mal")
        setConsultarAPI(true)
    }

    const mostrarAlerta = () => {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ambos campos son obligatorios',
           
          })
    }
    


    return (
        <div className='cont-form'>
            <p className='label'>MONEDA</p>
            <Select
                className='select'
                placeholder='-- Seleccione --'
                value={moneda}
                options={options}
                onChange={setMoneda}
            />
            <p className='label'>CRIPTOMONEDA</p>
            <Select
                className='select'
                placeholder='-- Seleccione --'
                value={criptoMoneda}
                options={trendingMoneys}
                onChange={setCriptoMoneda}
            />
            <button className='btn-cotizar' onClick={()=>cotizarPrecio()}>COTIZAR</button>
        </div>
    )
}
export default Formulario