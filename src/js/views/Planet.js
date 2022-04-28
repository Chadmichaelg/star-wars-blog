import React, {useState, useEffect, useContext}from 'react';
import { Context } from "../store/appContext";
import Link from "react-router-dom";

export const Planet = (props) => {
    console.log(props)
    const { store, actions } = useContext(Context);
    const fetchPlanet = "https://www.swapi.tech/api/"
    useEffect(() => {
        actions.loadPlanet(id)
    }, [])
    console.log(store)
    let id = props.match.params.id
    return (
        <div>
           {!store.planet ? <h1>loading</h1> : <p>{store.planet.description}</p>}
        </div>)
};