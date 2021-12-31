import React from "react";
import { Form } from "react-bootstrap";
const MyProfile = () => {
	return (
		<div className="formBloc">
			<div className="myForm">
				<Form>
					<h3 className="text-center">My profile</h3>
					<Form.Group className="mb-3" controlId="name">
						<Form.Label>Name</Form.Label>
						<Form.Control type="email" placeholder="nana" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="lastName">
						<Form.Label>Last name</Form.Label>
						<Form.Control type="email" placeholder="diaby" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="email">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="name@example.com" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="password">
						<Form.Control type="submit" className="mySubmit" value="Modify" />
					</Form.Group>
				</Form>
			</div>
		</div>
	);
};

export default MyProfile;
