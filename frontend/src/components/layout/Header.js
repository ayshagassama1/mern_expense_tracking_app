import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { faPlusSquare, faHome } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	return (
		<Navbar bg="info" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand href="/">Expense Tracking App</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="m-auto">
						<Nav.Link href="/" className="myLink">
							<FontAwesomeIcon icon={faHome} />
						</Nav.Link>
						<Nav.Link href="#features" className="myLink">
							Expenses
						</Nav.Link>
						<Nav.Link href="#pricing" className="myLink">
							Reports
						</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#pricing" className="addExpense myLink">
							<FontAwesomeIcon icon={faPlusSquare} />
							&nbsp;Add expense
						</Nav.Link>
						<Nav.Link href="#pricing" className="myLink">
							My profile
						</Nav.Link>
						<Nav.Link href="/connection" className="myLink">
							Sign in
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
