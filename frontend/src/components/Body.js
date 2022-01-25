import React,{useEffect} from "react";
import { Card } from "react-bootstrap";
import Spend from "./Spend";
import Tableau from "./Tableau";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { useDispatch, useSelector } from "react-redux";


const Body = () => {
	return (
		<>
			<div className="bloc-a-accueil">
				<Card>
					<Spend />
				</Card>
			</div>
			<div className="bloc-b-accueil">
				<Card className="tableaux">
					<Tableau
						nomCategorie="Groceries"
						classe="enteteTableauSuccess"
						depense="spent extra"
						pastAverage="$25"
						thisMonth="$55"
						balance="$30"
					/>
					<Tableau
						nomCategorie="Commute"
						classe="enteteTableauPrimary"
						depense="saved&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
						pastAverage="$55"
						thisMonth="$25"
						balance="$30"
					/>
					<Tableau
						nomCategorie="Eating out"
						classe="enteteTableauWarning"
						depense="saved&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
						pastAverage="$55"
						thisMonth="$25"
						balance="$30"
					/>
					<Tableau
						nomCategorie="Others"
						classe="enteteTableauDanger"
						depense="saved&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
						pastAverage="$55"
						thisMonth="$25"
						balance="$30"
					/>
				</Card>
			</div>
		</>
	);
};

export default Body;
