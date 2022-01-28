import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import {updateProfile  } from "../actions/userAction";
import { useDispatch, useSelector} from "react-redux";

const MyProfile = () => {
	let navigate = useNavigate();
	const dispatch = useDispatch();

	const [email, setEmail] = useState("");
	const [message, setMessage] = useState(null);
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [confirmpassword, setConfirmpassword] = useState();
	
	

	const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, success } = userUpdate;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    } else {
      setFirstName(userInfo.firstName);
	  setLastName(userInfo.lasttName);
      setEmail(userInfo.email);
      
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(updateProfile({ firstName, lastName,  email, password }));
  };
	return (
		<div className="formBloc">
			<div className="myForm">
				<Form onSubmit={submitHandler}>
				{loading && <Loading />}
              {success && (
                <ErrorMessage variant="success">
                  Updated Successfully
                </ErrorMessage>
              )}
			   {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
					<h3 className="text-center">My profile</h3>
					<Form.Group className="mb-3" controlId="name">
						<Form.Label>First Name</Form.Label>
						<Form.Control 
						type="text" 
						placeholder="nana"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)} />
					</Form.Group>
					<Form.Group className="mb-3" controlId="lastName">
						<Form.Label>Last name</Form.Label>
						<Form.Control 
						type="text" 
						placeholder="DIABY"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)} />
					</Form.Group>
					<Form.Group className="mb-3" controlId="email">
						<Form.Label>Email address</Form.Label>
						<Form.Control 
						type="email" 
						placeholder="name@example.com" 
						value={email}
						onChange={(e) => setEmail(e.target.value)} />
					</Form.Group>
					<Form.Group className="mb-3" controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control 
						type="password" 
						value={password}
						onChange={(e) => setPassword(e.target.value)} />
					</Form.Group>
					<Form.Group controlId="confirmPassword">
					<Form.Label>Confirm Password</Form.Label>
						<Form.Control
						type="password"
						placeholder="Confirm Password"
						value={confirmpassword}
						onChange={(e) => setConfirmpassword(e.target.value)}
						></Form.Control>
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
