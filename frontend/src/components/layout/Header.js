import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, Nav, Navbar, Modal, Form } from "react-bootstrap";
import { faPlusSquare, faHome, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import AddExpense from "../AddExpense";

const Header = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Navbar bg="primary" variant="dark" expand="lg">
				<Container>
					<Navbar.Brand href="/">
						<FontAwesomeIcon icon={faMoneyBill} /> &nbsp; Expense Tracking App
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="m-auto">
							<Nav.Link href="/" className="myLink">
								<FontAwesomeIcon icon={faHome} />
							</Nav.Link>
							<Nav.Link href="/expenses" className="myLink">
								Expenses
							</Nav.Link>
							<Nav.Link href="/reports" className="myLink">
								Reports
							</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href="#" className="addExpense myLink" onClick={handleShow}>
								<FontAwesomeIcon icon={faPlusSquare} />
								&nbsp;Add expense
							</Nav.Link>
							<Nav.Link href="/profile" className="myLink">
								My profile
							</Nav.Link>
							<Nav.Link href="/login" className="myLink">
								Sign in
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<AddExpense show={show} handleClose={handleClose} />
		</>
	);
};

export default Header;
