import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Planets = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.loadPlanets()
    }, [])
    // const { store, actions } = useContext(Context);
    console.log(store)
    return (
        <div className = "d-flex overflow">
            
            {!store.planets ? <h1>loading </h1> : store.planets.map((planet, i) => {
                return (
                    <div key={planet.uid} className = "p-2">
                        <img style={{height: 300, width: 300}} src="https://fandomwire.com/wp-content/uploads/2020/07/star-wars-Earth.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title" style={{color: 'white'}}>{planet.name}</h5>
                                <p className="card-text" style={{color: 'white'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-primary"><Link style={{color: 'white'}} to={`planet/${planet.uid}`}><p>Learn more you can</p></Link></button>
                                <button className="heart" variant="warning" onClick={() => actions.favoritesInfo(planet.name)}>
						            <i className="far fa-heart" />
					            </button>
                            </div>
                            
                    </div>
                );
            })}
        </div>)
};
                            
                
                
//             })}
//         </div>)
// };