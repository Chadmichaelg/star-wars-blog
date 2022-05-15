import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Starships = () => {
    useEffect(() => {
        actions.loadStarships()
    }, [])
    const { store, actions } = useContext(Context);
    console.log(store)
    return (
        <div className = "d-flex overflow">
            
            {!store.starships ? <h1>loading </h1> : store.starships.map((starship, i) => {
                return (
                    <div key={starship.uid} className = "p-2">
                        <img style={{height: 300, width: 300}} src="https://lumiere-a.akamaihd.net/v1/images/X-Wing-Fighter_47c7c342.jpeg?region=0%2C96%2C1536%2C769" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title" style={{color: 'white'}}>{starship.name}</h5>
                                <p className="card-text" style={{color: 'white'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-primary"><Link style={{color: 'white'}} to={`starship/${starship.uid}`}><p>Learn more you can</p></Link></button>
                            </div>
                            
                    </div>
                );
            })}
        </div>)
};
                            
                
                
//             })}
//         </div>)
// };