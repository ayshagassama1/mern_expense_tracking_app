import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React ,{ useEffect, useState} from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listExpense } from "../actions/expenseActions";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import {
	faPlusSquare,
	faHome,
	faMoneyBill,
	faCarrot,
	faCar,
	faUtensils,
	faEdit,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";




const Expenses = () => {
	return (
		<>
			<div className="p-3 bg-white">
				<ul className=" w-full  p-2">
					<table className="table w-100  ">
						<tbody>
							<tr>
								<th>Category</th>
								<th>Sum</th>
								<th>Date</th>
								<th>Actions</th>
							</tr>

							<tr>
								<td className="colorSuccess">
									<FontAwesomeIcon icon={faCarrot} />
									&nbsp;Groceries
								</td>
								<td>$ 40</td>
								<td>7/7/2031</td>
								<td>
									<button className="btn btn-primary rounded">
										<FontAwesomeIcon icon={faEdit} />
									</button>
									<button className="btn btn-danger rounded">
										<FontAwesomeIcon icon={faTrash} />
									</button>
								</td>
							</tr>
							<tr>
								<td className="colorPrimary">
									<FontAwesomeIcon icon={faCar} />
									&nbsp;Commute
								</td>
								<td>$ 58</td>
								<td>7/7/2031</td>
								<td>
									<button className="btn btn-primary rounded">
										<FontAwesomeIcon icon={faEdit} />
									</button>
									<button className="btn btn-danger rounded">
										<FontAwesomeIcon icon={faTrash} />
									</button>
								</td>
							</tr>
							<tr>
								<td className="colorWarning">
									<FontAwesomeIcon icon={faUtensils} />
									&nbsp;Eating-out
								</td>
								<td>$ 58</td>
								<td>7/7/2031</td>
								<td>
									<button className="btn btn-primary rounded">
										<FontAwesomeIcon icon={faEdit} />
									</button>
									<button className="btn btn-danger rounded">
										<FontAwesomeIcon icon={faTrash} />
									</button>
								</td>
							</tr>
							<tr>
								<td className="colorDanger">
									<FontAwesomeIcon icon={faMoneyBill} />
									&nbsp;&nbsp;Others
								</td>
								<td>$ 58</td>
								<td>7/7/2031</td>
								<td>
									<button className="btn btn-primary rounded">
										<FontAwesomeIcon icon={faEdit} />
									</button>
									<button className="btn btn-danger rounded">
										<FontAwesomeIcon icon={faTrash} />
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</ul>
			</div>
		</>
	);
};

	const dispatch = useDispatch();

	const expenseList = useSelector((state) => state.expenseList);
	const { loading, expenses, error } = expenseList;
    
	const userLogin = useSelector((state) => state.userLogin);
     const { userInfo } = userLogin;

	 const expenseCreate = useSelector((state) => state.expenseCreate);
	 const { success: successCreate } = expenseCreate;

	const deleteHandler = (id) => {
		if(window.confirm("Are you sure ?")) {

		}
	};
    
	

    const navigate = useNavigate();
	useEffect(() => {
		dispatch(listExpense());
		if(!userInfo) {
			navigate("/home");
		}
	},  [dispatch, successCreate, userInfo, navigate]);

	const lier = () => {
		navigate("/createexpense");
	};
	//const expenseDelete = useSelector((state) => state.expenseDelete);
  /*const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = expenseDelete;*/

  //const expenseCreate = useSelector((state) => state.expenseCreate);
  //const { success: successCreate } = expenseCreate;

  

  /*const expenseUpdate = useSelector((state) => state.expenseUpdate);
  const { success: successUpdate } = expenseUpdate;*/

	

	
	//
	/* {console.log(expenses)}*/
	//<h1> //title={`welcome back ${userInfo && userInfo.firtName }`} </h1>
		  
	

return (
	<div >
			
			
		
			<Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg" onClick={lier}>
			  Create new Expense
			</Button>
		
		
		  
		  {error && <ErrorMessage variant = "danger"> {error}</ErrorMessage>}
		  { loading && <Loading />}
		  {expenses &&
			expenses?.map((expense) => (
				<Accordion key={expense._id}>
				  <Card style={{ margin: 10 }} >
					<Card.Header style={{ display: "flex" }}>
					  <span
						// onClick={() => ModelShow(note)}
						style={{
						  color: "black",
						  textDecoration: "none",
						  flex: 1,
						  cursor: "pointer",
						  alignSelf: "center",
						  fontSize: 18,
						}}
					  >
						<Accordion.Toggle
						  as={Card.Text}
						  variant="link"
						  eventKey="0"
						>
						  {expense.montant}
						</Accordion.Toggle>
					  </span>
	
					  <div>
						<Button href={`/expense/${expense._id}`}>Edit</Button>
						<Button
						  variant="danger"
						  className="mx-2"
						  onClick={() => deleteHandler(expense._id)}
						>
						  Delete
						</Button>
					  </div>
					</Card.Header>
					<Accordion.Collapse eventKey="0">
					  <Card.Body>
						<h4>
						  <Badge variant="success">
							Category - {expense.category}
						  </Badge>
						</h4>
						<blockquote className="blockquote mb-0">
						  
						  <footer className="blockquote-footer">
							Created on{" "}
							<cite title="Source Title">
							  {expense.createdAt.substring(0, 10)}
							</cite>
						  </footer>
						</blockquote>
					  </Card.Body>
					</Accordion.Collapse>
				  </Card>
				</Accordion>
			  ))}
		</div>
	  );
	};

export default Expenses;
