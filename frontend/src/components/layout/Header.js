import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, Nav, Navbar, Modal, Form} from "react-bootstrap";
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
							<Nav.Link href="#" className="myLink">
								Expenses
							</Nav.Link>
							<Nav.Link href="/reports" className="myLink">
								Reports
							</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link
								href="#"
								className="addExpense myLink"
								onClick={handleShow}>
								<FontAwesomeIcon icon={faPlusSquare} />
								&nbsp;Add expense
							</Nav.Link>
							<Nav.Link href="/profile" className="myLink">
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
						<h3 className="text-center text-info2">Add expense</h3>
						<Form.Group className="mb-3" controlId="email">
							<Form.Label className="text-info2">Price</Form.Label>
							<Form.Control type="number" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="category">
							<Form.Label className="text-info2">Category</Form.Label>
							<Form.Select aria-label="Default select example">
								<option>Categories</option>
								<option value="groceries">Groceries</option>
								<option value="commute">Commute</option>
								<option value="eating out">Eating out</option>
							</Form.Select>
						</Form.Group>
						<Form.Group className="mb-3" controlId="password">
							<Form.Control type="submit" className="mySubmit" value="Save" />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer></Modal.Footer>
			</Modal>
		</>
	);
};

export default Header;
