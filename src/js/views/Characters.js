import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/home.css";

export const Characters = () => {
    useEffect(() => {
        actions.loadCharacters()
    }, [])
    const { store, actions } = useContext(Context);
    console.log(store)
    return (
        <div className = "d-flex overflow">
            
            {!store.characters ? <h1>loading </h1> : store.characters.map((character, i) => {
                return (
                    // <div className = "card">
                    <div key={character.uid} className = "p-2">
                        <img style={{height: 300, width: 300}} src="https://www.artmajeur.com/medias/standard/r/h/rhodesart/artwork/7872727_dscn6980.jpg" className="card-img-top" alt="..."/>
                            <div className="card_body">
                                <h5 className="card-title" style={{color: 'white'}}>{character.name}</h5>
                                <p className="card-text" style={{color: 'white'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-primary"><Link style={{color: 'white'}} to={`character/${character.uid}`}><p>Learn more you can</p></Link></button>
                                <button className="heart" variant="warning" onClick={() => actions.favoritesInfo(props.name)}>
						            <i className="far fa-heart" />
					            </button>
                            </div>
                            
                    </div>
                    // </div>
                );
            })}
        </div>)
};
                            
                
                
//             })}
//         </div>)
// };
                            
                
                
//             })}
//         </div>)
// };