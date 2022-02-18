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
let dailyData = [];
let globalData = [];

function getMonth(date) {
	let mdate = new Date();
	let annee = mdate.getFullYear();
	let month = date.split("-");
	if (annee != parseInt(month[0])) {
		return 13;
	}
	return month[1];
}

function getDailyData(expenses) {
	//crée une nouvelle date
	let today = new Date();
	today = today.toISOString().slice(0, 10);
	let data = [];
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
	}
	data.push(sumCommute);
	data.push(sumEatingOut);
	data.push(sumGroceries);
	data.push(sumOthers);

	return data;
}

function getGlobalData(expenses) {
	//vont contenir la somme totale dans chaque catégorie de dépense pour chaque mois.
	const globalCommute = [];
	const globalOthers = [];
	const globalEatingOut = [];
	const globalGroceries = [];
	//le tableau qui va contenir les 4 tableaux
	const data = [];
	//hashmap ou dictionnaire mois => tableau_de_dépenses_de_ce_mois
	//la seule alternative aurait été de créer 12 tableax et puis de parcourir
	//le tableau des dépenses lire le mois de création et ajouter cette dépense au tableau correspondant
	let dict = new Map();
	const lExpenses = expenses;
	if (lExpenses) {
		lExpenses.forEach((expense) => {
			//si le dictionnaire n'a pas encore ce mois parmi ses clés on l'ajoute et on lui assigne un tableau vide
			if (!dict.has(getMonth(expense.createdAt))) {
				dict.set(getMonth(expense.createdAt), []);
			}
			//si la clé mois existe déja on ajoute à la liste la dépense
			dict.get(getMonth(expense.createdAt)).push(expense);
		});
	}

	//tabExpenses va contenir les tableaux de dépenses séparés par mois
	let tabExpenses = [];
	for (const value of dict.values()) {
		tabExpenses.push(value);
	}
	tabExpenses.forEach((tabExpense) => {
		let sumGroceries = 0;
		let sumOthers = 0;
		let sumEatingOut = 0;
		let sumCommute = 0;
		//pour chaque tableau (pour chaque mois donc) on parcours les expenses et on somme
		//les dépenses pour chaque catégorie
		tabExpense.forEach((e) => {
			switch (e.category) {
				case "groceries":
					sumGroceries += e.montant;
					break;
				case "commute":
					sumCommute += e.montant;
					break;
				case "eating out":
					sumEatingOut += e.montant;
					break;
				case "others":
					sumOthers += e.montant;
					break;
			}
		});
		globalCommute.push(sumCommute);
		globalGroceries.push(sumGroceries);
		globalEatingOut.push(sumEatingOut);
		globalOthers.push(sumOthers);
	});

	data.push(globalCommute);
	data.push(globalGroceries);
	data.push(globalEatingOut);
	data.push(globalOthers);

	//on met à la fin du tableau les mois des dépenses pour pouvoir les afficher sur le chart
	//les 4 premiers éléments de data sont donc des tableaux et le reste les mois correspondants
	for (const value of dict.keys()) {
		data.push(value);
	}
	//console.log(data);
	return data;
}

const Reports = () => {
	const dispatch = useDispatch();

	const expenseList = useSelector((state) => state.expenseList);
	const { loading, expenses, error } = expenseList;
	//console.log(expenses);
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const expenseCreate = useSelector((state) => state.expenseCreate);
	const { success: successCreate } = expenseCreate;

	const navigate = useNavigate();
	const [loadDaily, setLoadDaily] = useState(false);

	dailyData = getDailyData(expenses);
	const dailyChartData = {
		labels: ["Commute", "Eating-out", "Groceries", "Others"],
		datasets: [
			{
				label: "# of Votes",
				data: dailyData,
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
	globalData = getGlobalData(expenses);
	useEffect(() => {
		setLoadDaily(true);
		dispatch(listExpense());
		if (!userInfo) {
			navigate("/");
		}
		setLoadDaily(false);
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
							{loadDaily && <Loading />}
							<Tab.Pane className="doughnut" eventKey="first">
								{!dailyData.reduce((partialSum, a) => partialSum + a, 0) && (
									<ErrorMessage variant="warning">
										{"Vous n'avez pas encore de données aujourd'hui"}
									</ErrorMessage>
								)}
								<DailyChart chartData={dailyChartData} />
							</Tab.Pane>
							<Tab.Pane eventKey="second">
								<GlobalChart chartData={globalData} />
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</div>
	);
};

export default Reports;
