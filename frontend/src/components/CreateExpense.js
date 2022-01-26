
import { Modal, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import ReactMarkdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import  { createExpenseAction } from "../actions/expenseActions";

function CreateExpense () {
	
     let navigate = useNavigate();
	 const dispatch = useDispatch();

	
	const [message, setMessage] = useState(null);
    const [category, setCategory] = useState("");
	const [montant, setMontant] = useState("");
	
    
    const expenseCreate = useSelector((state) => state.expenseCreate);
	const {loading, error, expense} = expenseCreate;

	

	const resetHandler = () => {
		setMontant("");
		setCategory("");
	};
	
	
	const submitHandler = (e) => {
		e.preventDefault();
			   
			    if(!montant || !category) return;
				dispatch(createExpenseAction(category,montant));

			   resetHandler();
			   navigate("/expenses");
		  
    };

	useEffect(() => {}, []);

	return (
		<div className="formBloc">
			<div className="myForm">
				{error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
				{loading && <Loading />}
				<Form onSubmit={submitHandler}>
					<h3 className="text-center">Create Expense</h3>
					<Form.Group className="mb-3" controlId="montant">
						<Form.Label>Montant</Form.Label>
						<Form.Control
							type="number"
							value={montant}
							placeholder="entrer le montant"
							onChange={(e) => setMontant(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="category">
						<Form.Label>Category</Form.Label>
						<Form.Control
							type="text"
							value={category}
							placeholder="Enteez la désignation"
							onChange={(e) => setCategory(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="password">
						<Form.Control type="submit" className="mySubmit" value="Save" />
					</Form.Group>
					
				</Form>
			</div>
		</div>
	);
};

export default CreateExpense;
