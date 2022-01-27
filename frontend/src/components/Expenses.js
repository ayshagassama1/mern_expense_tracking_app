import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { listExpense, deleteExpenseAction, updateExpenseAction } from "../actions/expenseActions";
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
	const dispatch = useDispatch();

	const expenseList = useSelector((state) => state.expenseList);
	const { loading, expenses, error } = expenseList;
	console.log(expenses);
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const expenseCreate = useSelector((state) => state.expenseCreate);
	const { success: successCreate } = expenseCreate;

	const expenseDelete = useSelector((state) => state.expenseDelete);
	const { loading: loadingDelete, error: errorDelete, success: successDelete } = expenseDelete;

	const expenseUpdate = useSelector((state) => state.expenseUpdate);
	const { success: successUpdate } = expenseUpdate;

	const deleteHandler = (id) => {
		if (window.confirm("Are you sure ?")) {
			dispatch(deleteExpenseAction(id));
		}
	};

	const updateHandler = (id, montant, category) => {
		if (window.confirm("Are you sure ?")) {
			dispatch(updateExpenseAction(id, montant, category));
		}
	};

	const navigate = useNavigate();
	useEffect(() => {
		dispatch(listExpense());
		if (!userInfo) {
			navigate("/");
		}
	}, [dispatch, successCreate, userInfo, navigate]);
	return (
		<>
			{error && <ErrorMessage variant="danger"> {error}</ErrorMessage>}
			{loading && <Loading />}

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

							{expenses &&
								expenses?.map((expense) => (
									<tr key={expense._id}>
										<td className="colorSuccess">
											<FontAwesomeIcon icon={faCarrot} />
											&nbsp;{expense.category}
										</td>
										<td>{expense.montant}</td>
										<td> {expense.createdAt.substring(0, 10)}</td>
										<td>
											<button
												className="btn btn-primary rounded"
												href={`/expense/${expense._id}`}>
												<FontAwesomeIcon icon={faEdit} />
											</button>
											<button
												className="btn btn-danger rounded"
												onClick={() => deleteHandler(expense._id)}>
												<FontAwesomeIcon icon={faTrash} />
											</button>
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</ul>
			</div>
		</>
	);
};
export default Expenses;
