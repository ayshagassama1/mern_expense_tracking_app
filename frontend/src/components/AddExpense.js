import React from "react";
import { Modal, Form } from "react-bootstrap";

const AddExpense = ({ show, handleClose }) => {
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<Form>
						<h3 className="text-center text-info2">Add expense</h3>
						<Form.Group className="mb-3" controlId="email">
							<Form.Label className="text-info2">Price</Form.Label>
							<Form.Control type="number" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="category">
							<Form.Label className="text-info2">Category</Form.Label>
							<Form.Select aria-label="Default select example">
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
