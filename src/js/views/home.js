import React from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Characters } from "./Characters";

export const Home = () => {
	
	return (
		<div>
			<h1>Characters</h1>
<Characters />

			<h1>Planets</h1>
		</div>
		)
	};
		
	

