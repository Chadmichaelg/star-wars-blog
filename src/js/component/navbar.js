import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span ><img style={{height: 100, width: 120}} src="https://www.pngitem.com/pimgs/m/21-210302_star-wars-logo-png-star-wars-logo-icon.png" /></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};

