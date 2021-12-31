import React from "react";

const ContenuTableau = (props) => {
	return (
		<>
			<tbody>
				<tr>
					<td>{props.pastAverage}</td>
					<td className="tdThisMonth">{props.thisMonth}</td>
					<td>{props.balance}</td>
				</tr>
			</tbody>
		</>
	);
};

export default ContenuTableau;
