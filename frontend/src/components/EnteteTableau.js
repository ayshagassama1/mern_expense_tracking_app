import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const EnteteTableau = (props) => {
	return (
		<>
			<div className={props.classe + " enteteTableau"}>{props.nomCategorie}</div>
		</>
	);
};

export default EnteteTableau;
