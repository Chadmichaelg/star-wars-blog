import React, {useState, useEffect, useContext}from 'react';
import { Context } from "../store/appContext";
import Link from "react-router-dom";
import "../../styles/character.css";

export const Starship = (props) => {
    console.log(props)
    const { store, actions } = useContext(Context);
    // const fetchStarship = "https://www.swapi.tech/api/"
    useEffect(() => {
        actions.loadStarship(id)
    }, [])
    console.log(store)
    let id = props.match.params.id
    return (
        <div className = "info" style={{color: 'white'}}>
           {!store.starship ? <h1>loading</h1> : 
           <div className = 'container'>
               <img style={{height: 150, width: 300}} src="https://clipart.info/images/ccovers/1559831512star-wars-png-transparent-24.png" className="card-img-top" alt="..."/>
               <h1 style={{color: 'yellow'}}>{store.starship.name}</h1>
               <li>
                   Model: {store.starship.model}  
               </li>
               <li>
                   Starship Class: {store.starship.starship_class}  
               </li>
               <li>
                   Manufacturer: {store.starship.manufacturer}  
               </li>
               <li>
                   Cost in Credits: {store.starship.cost_in_credits}  
               </li>
               <li>
                   Length: {store.starship.length}  
               </li>
               <li>
                   Crew: {store.starship.crew}  
               </li>
               <li>
                   Passengers: {store.starship.passengers}  
               </li>
               
            </div>}
        </div>)
};