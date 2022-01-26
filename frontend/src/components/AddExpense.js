import React, {useEffect, useState} from "react";
import { Modal, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import  { createExpenseAction } from "../actions/expenseActions";

const AddExpense = ({ show, handleClose }) => {

	let navigate = useNavigate();
	 const dispatch = useDispatch();

	
	const [message, setMessage] = useState(null);
    const [category, setCategory] = useState("");
	const [montant, setMontant] = useState("");
	
    
    const expenseCreate = useSelector((state) => state.expenseCreate);
	const {loading, error, expense} = expenseCreate;

	
	
	const submitHandler = (e) => {
		e.preventDefault();
			  
			    if(!montant || !category) return;
				dispatch(createExpenseAction(category,montant));
		  
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
						<Form.Group className="mb-3" controlId="price">
							<Form.Label className="text-info2">Price</Form.Label>
							<Form.Control 
							type="number"
							value = {montant}
							onChange={(e) => setMontant(e.target.value)} />
						</Form.Group>
						
						<Form.Group className="mb-3" controlId="category">
							<Form.Label className="text-info2">Category</Form.Label>
							<Form.Select aria-label="Default select example" onChange={(e) => setCategory(e.target.value)}  >
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

export default AddExpense;
