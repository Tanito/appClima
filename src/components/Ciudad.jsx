import React from "react";
import './Ciudad.css'; 

export default function Ciudad({city}) {
    if(!city) return <h2>Ciudad no encontrada</h2>;
    return (
             <div className="ciudad">
                <div className="container">
                    <h2 id='title'>{city.name}</h2>
                    <div className="info1">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Nubosidad: {city.clouds}% </div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
               </div>
        </div>
    )
}