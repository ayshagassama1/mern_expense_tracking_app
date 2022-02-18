import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import Spend from "./Spend";
import Tableau from "./Tableau";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { listExpense } from "../actions/expenseActions";

const date = new Date();
const today = date.toISOString().slice(0, 10);
const timeStamp = new Date().getTime();
const yesterdayTimeStamp = timeStamp - 24 * 60 * 60 * 1000;
const yesterdayDate = new Date(yesterdayTimeStamp);
const yesterday = yesterdayDate.toISOString().slice(0, 10);

function getMonth(date) {
	let month = date.split("-");
	return month[1];
}

function getMonthlyExpenses(expenses, category) {
	const lExpenses = expenses;
	let sum = 0;
	if (lExpenses) {
		lExpenses.forEach((expense) => {
			if (getMonth(expense.createdAt) == getMonth(today) && expense.category == category) {
				sum += expense.montant;
			}
		});
	}

	return sum;
}

function getDailyExpenses(expenses, date) {
	const lExpenses = expenses;
	let sum = 0;
	if (lExpenses) {
		lExpenses.forEach((expense) => {
			if (expense.createdAt == date) {
				sum += expense.montant;
			}
		});
	}
	return sum;
}

function getPastAverage(expenses, category) {
	let somTotal = 0;
	//vont contenir la somme totale dans chaque catégorie de dépense pour chaque mois.
	const somParMois = [];
	//le tableau qui va contenir les 4 tableaux

	//hashmap ou dictionnaire mois => tableau_de_dépenses_de_ce_mois
	//la seule alternative aurait été de créer 12 tableax et puis de parcourir
	//le tableau des dépenses lire le mois de création et ajouter cette dépense au tableau correspondant
	let dict = new Map();
	const lExpenses = expenses;
	if (lExpenses) {
		lExpenses.forEach((expense) => {
			//si le dictionnaire n'a pas encore ce mois parmi ses clés on l'ajoute et on lui assigne un tableau vide
			if (expense.category === category && getMonth(expense.createdAt) != getMonth(today)) {
				if (!dict.has(getMonth(expense.createdAt))) {
					dict.set(getMonth(expense.createdAt), []);
				}
				//si la clé mois existe déja on ajoute à la liste la dépense
				dict.get(getMonth(expense.createdAt)).push(expense);
			}
		});
	}

	//tabExpenses va contenir les tableaux de dépenses séparés par mois
	let tabExpenses = [];
	for (const value of dict.values()) {
		tabExpenses.push(value);
	}

	//pour chaque tableau (pour chaque mois donc)
	tabExpenses.forEach((tabExpense) => {
		let sum = 0;
		// on parcours les expenses de ce mois et on somme les dépenses pour chaque catégorie
		tabExpense.forEach((e) => {
			sum += e.montant;
		});

		somParMois.push(sum);
	});

	somParMois.forEach((sum) => {
		somTotal += sum;
	});
	//moyenne des dépenses passés de cette catégorie

	if (somTotal) {
		somTotal = somTotal / somParMois.length;
	}
	return somTotal;
}

const Body = () => {
	const dispatch = useDispatch();

	const expenseList = useSelector((state) => state.expenseList);
	const { loading, expenses, error } = expenseList;
	//console.log(expenses);
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const navigate = useNavigate();

	const lExpenses = expenses;
	if (lExpenses) {
		lExpenses.forEach((expense) => {
			expense.createdAt = expense.createdAt.substring(0, 10);
			console.log(expense);
		});
	}
	const todayExpenses = getDailyExpenses(expenses, today);
	const yesterdayExpenses = getDailyExpenses(expenses, yesterday);

	const monthlyGroceries = getMonthlyExpenses(expenses, "groceries");
	const monthlyEatingOut = getMonthlyExpenses(expenses, "eating out");
	const monthlyOthers = getMonthlyExpenses(expenses, "others");
	const monthlyCommute = getMonthlyExpenses(expenses, "commute");

	const monthlyExpenses = monthlyCommute + monthlyEatingOut + monthlyGroceries + monthlyOthers;

	const paCommute = getPastAverage(expenses, "commute");
	const paGroceries = getPastAverage(expenses, "groceries");
	const paEatingOut = getPastAverage(expenses, "eating out");
	const paOthers = getPastAverage(expenses, "others");

	const balanceGroceries = Math.abs(monthlyGroceries - paGroceries);
	const balanceCommute = Math.abs(monthlyCommute - paCommute);
	const balanceEatingOut = Math.abs(monthlyEatingOut - paEatingOut);
	const balanceOthers = Math.abs(monthlyOthers - paOthers);

	const spentGroceries = paGroceries > monthlyGroceries ? "saved" : "spent extra";
	const spentCommute = paCommute > monthlyCommute ? "saved" : "spent extra";
	const spentEatingOut = paEatingOut > monthlyEatingOut ? "saved" : "spent extra";
	const spentOthers = paOthers > monthlyOthers ? "saved" : "spent extra";

	useEffect(() => {
		dispatch(listExpense());
		if (!userInfo) {
			navigate("/");
		}
	}, [dispatch, userInfo, navigate]);

	return (
		<>
			<div className="bloc-a-accueil">
				<Card>
					<Spend
						dailyExpenses={todayExpenses}
						monthlyExpenses={monthlyExpenses}
						yesterdayExpenses={yesterdayExpenses}
					/>
				</Card>
			</div>
			<div className="bloc-b-accueil">
				<Card className="tableaux">
					<Tableau
						nomCategorie="Groceries"
						classe="enteteTableauSuccess"
						depense={spentGroceries}
						pastAverage={"$" + paGroceries}
						thisMonth={"$" + monthlyGroceries}
						balance={balanceGroceries}
					/>
					<Tableau
						nomCategorie="Commute"
						classe="enteteTableauPrimary"
						depense={spentCommute}
						pastAverage={"$" + paCommute}
						thisMonth={"$" + monthlyCommute}
						balance={balanceCommute}
					/>
					<Tableau
						nomCategorie="Eating out"
						classe="enteteTableauWarning"
						depense={spentEatingOut}
						pastAverage={"$" + paEatingOut}
						thisMonth={"$" + monthlyEatingOut}
						balance={balanceEatingOut}
					/>
					<Tableau
						nomCategorie="Others"
						classe="enteteTableauDanger"
						depense={spentOthers}
						pastAverage={"$" + paOthers}
						thisMonth={"$" + monthlyOthers}
						balance={balanceOthers}
					/>
				</Card>
			</div>
		</>
	);
};

export default Body;
