import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/home.css";
import { Characters } from "./Characters";
import { Planets } from "./Planets";
import { Starships } from "./Starships";


export const Home = () => {
	
	return (
		<div>
			
			<h1 style={{color: 'white'}}>Characters</h1>
			<div className = "scroll">
<Characters />
</div>
			<h1 style={{color: 'white'}}>Planets</h1>
			<div className = "scroll">
<Planets />
</div>
			<h1 style={{color: 'white'}}>Starships</h1>
			<div className = "scroll">
<Starships />
</div>
		</div>

		)
	};

	

