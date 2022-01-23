import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";

const NavBarNonConnecte = () => {
	return (
		<>
			<Navbar bg="primary" variant="dark" expand="lg">
				<Container>
					<Navbar.Brand href="#">
						<FontAwesomeIcon icon={faMoneyBill} /> &nbsp; Expense Tracking App
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link href="/login" className="myLink">
								Login in
							</Nav.Link>
							<Nav.Link href="/register" className="myLink">
								Sign up
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBarNonConnecte;
