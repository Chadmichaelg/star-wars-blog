import React, {useState, useEffect, useContext}from 'react';
import { Context } from "../store/appContext";
import Link from "react-router-dom";
import "../../styles/character.css";

export const Character = (props) => {
    console.log(props)
    const { store, actions } = useContext(Context);
    // const fetchCharacter = "https://www.swapi.tech/api/"
    useEffect(() => {
        actions.loadCharacter(id)
    }, [])
    console.log(store)
    let id = props.match.params.id
    return (
        <div style={{color: 'white'}}>
           {!store.character ? <h1>loading</h1> : 
           <div>
               <div className = 'container'>
               <img style={{height: 175, width: 350}} src="https://clipart.info/images/ccovers/1559831511Starwars-png-Yoda-5-render-by-aracnify-d9313br.png" className="card-img-top" alt="..."/>
               <h1 style={{color: 'yellow'}}>{store.character.name}</h1>
               <li>
                   Eye Color: {store.character.eye_color}  
               </li>
               <li>
                   Hair Color: {store.character.hair_color}  
               </li>
               <li>
                   Skin Color: {store.character.skin_color}  
               </li>
               <li>
                   Height: {store.character.height}  
               </li>
               <li>
                   Mass: {store.character.mass}  
               </li>
               <li>
                   Birth Year: {store.character.birth_year}  
               </li>
               <li>
                   Gender: {store.character.gender}  
               </li>
               </div>
            </div>}
        </div>)
};