import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

const Inscription = () => {
	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmpassword, setConfirmpassword] = useState("");
	const [message, setMessage] = useState(null);

	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const submitHandler = async (e) => {
		e.preventDefault();

		if (password !== confirmpassword) {
			setMessage("Passwords do not Match");
		} else {
			setMessage(null);
			try {
				const config = {
					Headers: {
						"Content-type": "application/json",
					},
				};

				setLoading(true);

				const { data } = await axios.post(
					"/api/users",
					{
						firstName,
						lastName,
						email,
						password,
					},
					config
				);

				console.log(data);
				localStorage.setItem("userInfo", JSON.stringify(data));
				setLoading(false);
			} catch (error) {
				setError(error.response.data.message);
			}
		}
	};

	/*useEffect(() => {
	submitHandler();
}, []);*/

	return (
		<div className="formBloc">
			<div className="myForm">
				{error && <ErrorMessage variant="danger"> {error}</ErrorMessage>}
				{message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
				{loading && <Loading />}
				<Form onSubmit={submitHandler}>
					<h3 className="text-center">Inscription</h3>
					<Form.Group className="mb-3" controlId="name">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="name"
							value={firstName}
							placeholder="nana"
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="lastName">
						<Form.Label>Last name</Form.Label>
						<Form.Control
							type="name"
							value={lastName}
							placeholder="diaby"
							onChange={(e) => setLastName(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="email">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							value={email}
							placeholder="name@example.com"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="password">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							type="password"
							value={confirmpassword}
							onChange={(e) => setConfirmpassword(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="password">
						<Form.Control type="submit" className="mySubmit" value="Sign up" />
					</Form.Group>
					<p className="text-center">
						Already have an account ?<br />
						<a href="/login" className="text-primary">
							Sign in
						</a>
					</p>
				</Form>
			</div>
		</div>
	);
};

export default Inscription;
