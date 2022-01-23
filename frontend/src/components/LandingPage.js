import React from "react";
import { Button } from "react-bootstrap";
import NavBarNonConnecte from "./layout/NavBarNonConnecte";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

	let navigate = useNavigate();
	const LogTo = () => {
		navigate("/login");
	}

	const goToCreerCompte = () =>{
		navigate("/register");
	}
	return (
		<>
			<NavBarNonConnecte />
			<div
				style={{
					backgroundColor: "#593196",
					minHeight: "60vh",
					color: "#ffff",
					position: "absolute",
					width: "100%",
					borderRadius: "0px 0px 55% 0px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}>
				<h1 style={{}}>We will help you keep track of your expenses</h1>
				<h3>See how you spent your money</h3>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						color: "#593196",
						width: "15%",
					}}>
					<Button variant="light" className="text-primary" onClick={LogTo}>
						Sign in
					</Button>

					<Button variant="light" className="text-primary" onClick={goToCreerCompte}>
						Sign up
					</Button>
				</div>
			</div>
			<img
				style={{ marginTop: "15rem", height: "90vh", position: "relative", left: "0px" }}
				src="undraw_personal_finance_tqcd.svg"
				className="img-fluid"
			/>
		</>
	);
};

export default LandingPage;
