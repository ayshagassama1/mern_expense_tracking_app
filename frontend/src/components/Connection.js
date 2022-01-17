import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

const Connection = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState(null);


	const submitHandler = async (e) => {
		e.preventDefault();

		
		try {const config = {
			Headers: {
				"Content-type":"application/json",
			},
		};

		setLoading(true);

		const {data} = await axios.post('/api/users/login',
		{
			email,
			password
		},
		config
		);
         
		console.log(data);
		localStorage.setItem("userInfo", JSON.stringify(data));
		setLoading(false);
	} catch (error) {
		setError(error.response.data.message);
			
		}
	};

	return (
			<div className="myForm"> 
			    {error && <ErrorMessage variant ="danger">{error}</ErrorMessage>}
				{loading && <Loading />}
				<Form onSubmit={submitHandler}>
					<h3 className="text-center">Connection</h3>
					<Form.Group className="mb-3" controlId="email">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" 
						value ={email} 
						placeholder="name@example.com" 
						onChange={(e) => setEmail(e.target.value)}/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password"
						value={password}
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)} />
					</Form.Group>
					<Form.Group className="mb-3" controlId="password">
						<Form.Control type="submit" className="mySubmit" value="Sign In" />
					</Form.Group>
					<p className="text-center">
						Not suscribed yet ?<br />
						<a href="/register" className="text-primary">
							Sign up
						</a>
					</p>
				</Form>
			</div>
		
	);
};

export default Connection;
