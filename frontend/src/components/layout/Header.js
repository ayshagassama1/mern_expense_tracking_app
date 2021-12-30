import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Modal, Button, Form } from "react-bootstrap";
import { faPlusSquare, faHome } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
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
							<Nav.Link
								href="#pricing"
								className="addExpense myLink"
								onClick={handleShow}>
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

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<Form>
						<h3 className="text-center">Add expense</h3>
						<Form.Group className="mb-3" controlId="email">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="name@example.com" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="password">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="password">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer></Modal.Footer>
			</Modal>
		</>
	);
};

export default Header;
