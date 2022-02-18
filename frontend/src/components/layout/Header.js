import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, Nav, Navbar, Modal, Form } from "react-bootstrap";
import { faPlusSquare, faHome, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userAction";
import { Link, useNavigate } from "react-router-dom";
import AddExpense from "../AddExpense";
const Header = () => {
	const history = useNavigate();

	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const [show, setShow] = useState(false);

	const { userInfo } = userLogin;

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const logoutHandler = () => {
		dispatch(logout());
		history.push("/");
	};

	return (
		<>
			<Navbar bg="primary" variant="dark" expand="lg">
				<Container>
					<Navbar.Brand href="/home">
						<FontAwesomeIcon icon={faMoneyBill} /> &nbsp; Expense Tracking App
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="m-auto">
							<Nav.Link href="/home" className="myLink">
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
							<Nav.Link onClick={logoutHandler} href="/" className="myLink">
								logout
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<AddExpense show={show} onHide={handleClose} />
		</>
	);
};

export default Header;
