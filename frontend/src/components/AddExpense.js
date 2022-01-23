
import { Modal, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import ReactMarkdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import  { createExpenseAction } from "../actions/expenseActions";

function AddExpense ({ show, handleClose }) {
	
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
			   dispatch(createExpenseAction(category,montant));
			    if(!montant || !category) return;

			   resetHandler();
			   navigate("/expenses");
		  
    };

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
				{error && <ErrorMessage variant ="danger"> {error}</ErrorMessage>}
						{message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
						{loading && <Loading/>}
						<Form onSubmit={submitHandler}> 
					
						<h3 className="text-center text-info2">Add expense</h3>
						<Form.Group className="mb-3" controlId="montant">
							<Form.Label className="text-info2">Montant</Form.Label>
							<Form.Control 
							type="number"
							value={montant}
							placeholder="Enter the title"

							onChange={(e) => setMontant(e.target.value)}
						 />
						</Form.Group>

						<Form.Group className="mb-3" controlId="category">
							<Form.Label className="text-info2">Category</Form.Label>
							<Form.Control 
							type="text"
							value={category}
                            placeholder="Enter the Category"
							onChange={(e) => setCategory(e.target.value)}
						 />
						</Form.Group>
					    {loading && <Loading size ={50} />}
						<Form.Group className="mb-3" controlId="password">
							<Form.Control type="submit" className="mySubmit" value=" Create Expense" />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer></Modal.Footer>
			</Modal>
		</>
	);
}

export default AddExpense;
