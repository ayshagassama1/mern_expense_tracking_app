import React from "react";

const EnteteTableau = (props) => {
	return (
		<>
			<div className={props.classe + " enteteTableau"}>{props.nomCategorie}</div>
		</>
	);
};

export default EnteteTableau;
