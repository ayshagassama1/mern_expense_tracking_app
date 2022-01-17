import React from "react";
import { Container } from "react-bootstrap";
import ContenuTableau from "./ContenuTableau";
import EnteteTableau from "./EnteteTableau";

const Tableau = (props) => {
	return (
		<Container>
			<EnteteTableau nomCategorie={props.nomCategorie} classe={props.classe} />
			<table className="table">
				<thead>
					<tr>
						<th>past average</th>
						<th>this month</th>
						<th>{props.depense}</th>
					</tr>
				</thead>
				<ContenuTableau
					pastAverage={props.pastAverage}
					thisMonth={props.thisMonth}
					balance={props.balance}
				/>
			</table>
		</Container>
	);
};

export default Tableau;
