import React from "react";
import { Form } from "react-bootstrap";
const Connection = () => {
	return (
		<div className="formBloc">
			<div className="myForm">
				<Form>
					<h3 className="text-center">Connection</h3>
					<Form.Group className="mb-3" controlId="email">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="name@example.com" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="password">
						<Form.Control type="submit" className="mySubmit" value="Save" />
					</Form.Group>
					<p className="text-center">
						Not suscribed yet ?<br />
						<a href="/inscription" className="text-primary">
							Sign up
						</a>
					</p>
				</Form>
			</div>
		</div>
	);
};

export default Connection;
