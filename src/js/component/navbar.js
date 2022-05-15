import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "../../styles/navbar.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../store/appContext";
import getState from "../store/flux";
import DropdownItem from "react-bootstrap/esm/DropdownItem";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<span className="logo"><img style={{height: 200, width: 240}} src="https://clipart.info/images/ccovers/1513370389Star%20Wars%20Logo%20transparent%20PNG.png" /></span>
			</Link>
			<Dropdown>
				<Dropdown.Toggle className="toggle" variant="warning" id="dropdown-basic" size="lg">
				Dropdown Button
			</Dropdown.Toggle>
			<Dropdown.Menu>
				{store.favorites.length > 0 ? (
					store.favorites.map((favorite, i) => (
						<Dropdown.Item href="#/action-1" key={i}>
							{favorite}
							<Button variant="danger" onClick={() => actions.favoritesInfo(favorite, i)}>
								<i className="fas fa-trash-alt" />
							</Button>
						</Dropdown.Item>
					))
				) : (
					<DropdownItem>There are no favorites</DropdownItem>
				)}
			</Dropdown.Menu>
		</Dropdown>
		</nav>
	);
};



{/* <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

);
}; */}