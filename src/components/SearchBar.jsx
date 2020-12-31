import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form className="SearchBar"
    onSubmit={(e) => {  // se dispara el evento y recibe los datos del evento
      e.preventDefault();  // quita el comportamiento por default. En este caso, actualizar la página.
      onSearch(city);
      document.getElementById("barra").value="";
      //setCity('')
    }}>
      <input
        id= "barra"
        className="inputBuscar"
        type="text"
        placeholder="Ciudad..."
       // value={city}
        onChange={e => setCity(e.target.value)}
        
      />
      <input className="btnBuscar"
      type="submit" value="Agregar" />
    </form>
  );
}
