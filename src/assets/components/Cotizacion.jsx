import '../stylesheets/Cotizacion.css'

const Cotizacion = ({resultado}) => {
    
    //Esto es una forma de comprobar si el objeto viene vacio
    if (Object.keys(resultado).length === 0) return null

    return(
        <div className="resultado">
            <p className="texto valor">
                <span className="span-text">{resultado.PRICE}</span>
            </p>
            <p className="texto">Precio más alto del día: 
                <span className="span-text">{resultado.HIGHDAY}</span>
            </p>
            <p className="texto">Precio más bajo del día: 
                <span className="span-text">{resultado.LOWDAY}</span>
            </p>
            <p className="texto">Variación últimas 24 horas: 
                <span className="span-text">{resultado.CHANGEPCT24HOUR}%</span>
            </p>
            <p className="texto">Última actualización:
                <span className="span-text">{resultado.LASTUPDATE}</span>
            </p>
        </div>
    )
}

export default Cotizacion