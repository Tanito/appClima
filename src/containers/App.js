import React, { useState } from 'react';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad.jsx';

import { Route } from 'react-router-dom';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id != id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: Math.round(recurso.main.temp),
            name: recurso.name,
            weather: recurso.weather[0].description,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities.filter(c=> c.id !== ciudad.id), ciudad]);  // Para no agregar repetidos.
          //if(!cities.some(city => city.id === ciudad.id)){ //otra forma de hacer que no se guarden repetidos
          //  setCities(oldCities => [...oldCities, ciudad]);
         // } else { alert ('Ciudad ya existente')}
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id == parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }
  return (
    <div className="App">
      <Route
        path='/'
        render={() => <Nav onSearch={onSearch} />} // usamos "render" porque tenemos que pasarle props a "Nav".
      />
          <Route
          exact path='/'  // renderiza SOLO en ese path!!!!!!!!!!!
          render={() => <Cards // le pasamos cities y onClose
            cities={cities}
            onClose={onClose}
          />}
        />
      <Route
        path='/about'
        component={About}
      />
      <Route
        exact path='/ciudad/:ciudadId'
        render={({ match }) => <Ciudad city={onFilter(match.params.ciudadId)} />}
      />

    
      <hr />
    </div>
  );
}

export default App;
