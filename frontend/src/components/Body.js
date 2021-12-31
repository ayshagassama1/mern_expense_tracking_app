import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Spend from "./Spend";
import Tableau from "./Tableau";

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
						classe="enteteTableauDanger"
						depense="spent extra"
						pastAverage="$25"
						thisMonth="$55"
						balance="$30"
					/>
					<Tableau
						nomCategorie="Commute"
						classe="enteteTableauSuccess"
						depense="saved&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
						pastAverage="$55"
						thisMonth="$25"
						balance="$30"
					/>
					<Tableau
						nomCategorie="Eating out"
						classe="enteteTableauPrimary"
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
