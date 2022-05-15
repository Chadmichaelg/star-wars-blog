import React, {useState, useEffect, useContext}from 'react';
import { Context } from "../store/appContext";
import Link from "react-router-dom";
import "../../styles/character.css";

export const Planet = (props) => {
    console.log(props)
    const { store, actions } = useContext(Context);
    const fetchPlanets = "https://www.swapi.tech/api/planets/3"
    useEffect(() => {
        actions.loadPlanet(id)
    }, [])
    console.log(store)
    let id = props.match.params.id
    return (
        <div className = "info" style={{color: 'white'}}>
           {!store.planet ? <h1>loading</h1> : 

<div className = 'container'>
<img style={{height: 225, width: 225}} src="https://clipart.info/images/ccovers/1559831570star-wars-png-transparent-1.png" className="card-img-top" alt="..."/>
<h1 style={{color: 'yellow'}}>{store.planet.name}</h1>
<li>
    Diameter: {store.planet.diameter}  
</li>
<li>
    Rotation Period: {store.planet.rotation_period}  
</li>
<li>
    Orbital Period: {store.planet.orbital_period}  
</li>
<li>
    Gravity: {store.planet.gravity}  
</li>
<li>
    Population: {store.planet.population}  
</li>
<li>
    Climate: {store.planet.climate}  
</li>
<li>
    Terrain: {store.planet.terrain}  
</li>
<li>
    Surface Water: {store.planet.surface_water}  
</li>

</div>}
        </div>)
};