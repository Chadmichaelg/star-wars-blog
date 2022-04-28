import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planets = () => {
    useEffect(() => {
        actions.loadPlanets()
    }, [])
    const { store, actions } = useContext(Context);
    console.log(store)
    return (
        <div>
            <h1>Planets</h1>
            {!store.planets ? <h1>loading </h1> : store.planets.map((planets, i) => {
                return (
                    <div key={planet.uid}>
                        <img style={{height: 300, width: 300}} src="https://www.geekgirlauthority.com/wp-content/uploads/2020/02/sentient-aliens-from-star-wars-1200x640.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button class="btn btn-primary"><Link style={{color: 'white'}} to={`planet/${planet.uid}`}><p>{planet.name}</p></Link></button>
                            </div>
                            
                    </div>
                );
            })}
        </div>)
};
                            
                
                
//             })}
//         </div>)
// };