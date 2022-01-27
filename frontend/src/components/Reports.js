import React, { useEffect, useState } from "react";
import DailyChart from "./DailyChart";
import GlobalChart from "./GlobalChart";
import { Tab, Col, Row, Nav } from "react-bootstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { listExpense, deleteExpenseAction, updateExpenseAction } from "../actions/expenseActions";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = [];

export const dailyChartData = {
	labels: ["Commute", "Eating-out", "Groceries", "Others"],
	datasets: [
		{
			label: "# of Votes",
			data: data,
			backgroundColor: [
				"rgba(54, 162, 235, 0.5)",
				"rgba(255, 206, 86, 0.5)",
				"rgba(75, 255, 192, 0.5)",
				"rgba(255, 99, 132, 0.5)",
			],
			borderColor: [
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(75, 255, 192, 1)",
				"rgba(255, 99, 132, 1)",
			],
			borderWidth: 1,
		},
	],
};

const Reports = () => {
	const dispatch = useDispatch();

	const expenseList = useSelector((state) => state.expenseList);
	const { loading, expenses, error } = expenseList;
	console.log(expenses);
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const expenseCreate = useSelector((state) => state.expenseCreate);
	const { success: successCreate } = expenseCreate;

	const navigate = useNavigate();

	//crée une nouvelle date
	let today = new Date();
	today = today.toISOString().slice(0, 10);
	console.log(today);
	//somme des dépenses dans chaque catégorie
	let sumGroceries = 0;
	let sumOthers = 0;
	let sumEatingOut = 0;
	let sumCommute = 0;

	const lExpenses = expenses;
	if (lExpenses) {
		lExpenses.forEach((expense) => {
			expense.createdAt = expense.createdAt.substring(0, 10);
			//si l'expense a été créé aujourdhui
			if (expense.createdAt === today) {
				switch (expense.category) {
					case "groceries":
						sumGroceries += expense.montant;
						break;
					case "commute":
						sumCommute += expense.montant;
						break;
					case "eating out":
						sumEatingOut += expense.montant;
						break;
					case "others":
						sumOthers += expense.montant;
						break;
				}
			}
		});
		console.log(`groceries:${sumGroceries}, commute:${sumCommute}`);
		console.log(lExpenses);
	}
	data.push(sumCommute);
	data.push(sumEatingOut);
	data.push(sumGroceries);
	data.push(sumOthers);

	useEffect(() => {
		dispatch(listExpense());
		if (!userInfo) {
			navigate("/");
		}
	}, [dispatch, successCreate, userInfo, navigate]);

	return (
		<div className="tabCharts">
			<Tab.Container id="left-tabs-example" defaultActiveKey="first">
				<Row>
					<Col lg={3}>
						<Nav variant="pills" className="flex-column">
							<Nav.Item>
								<Nav.Link eventKey="first">Daily report</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="second">Global report</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col lg={9} sm={12} className="tabChartsContent">
						<Tab.Content className="charts">
							{error && <ErrorMessage variant="danger"> {error}</ErrorMessage>}
							{loading && <Loading />}
							<Tab.Pane className="doughnut" eventKey="first">
								<DailyChart chartData={dailyChartData} />
							</Tab.Pane>
							<Tab.Pane eventKey="second">
								<GlobalChart />
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</div>
	);
};

export default Reports;
