import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Loading from "./Loading";
import {Link, Navigate, useNavigate } from "react-router-dom";

import ErrorMessage from "./ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import {login} from "../actions/userAction";

const Connection =({ history }) => {
	history = useNavigate();
	
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	const dispatch = useDispatch();

	const userLogin =  useSelector((state) => state.userLogin);
	const { loading, error, userInfo} = userLogin;

     useEffect(() => {
		 if (userInfo) {
			Navigate("/tests");
		 }
	 }); 


	const submitHandler =  (e) => {
		e.preventDefault();

		dispatch(login(email, password));
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
