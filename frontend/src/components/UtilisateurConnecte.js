import React from "react";
import { Route, Routes } from "react-router-dom";
import Body from "./Body";
import Connection from "./Connection";
import Expenses from "./Expenses";
import Inscription from "./Inscription";
import Header from "./layout/Header";
import MyProfile from "./MyProfile";
import Reports from "./Reports";
import SingleExpense from "./SingleExpense";

const UtilisateurConnecte = () => {
	return (
		<div>
			<main style={{ minHeight: "87vh" }}>
				<Header />
				<Routes>
					<Route path="/user/home" element={<Body />} exact />
					<Route path="/login" element={<Connection />} />
					<Route path="/register" element={<Inscription />} />
					<Route path="/profile" element={<MyProfile />} />
					<Route path="/reports" element={<Reports />} />
					<Route path="/expenses" element={<Expenses />} />
					<Route path="/expense/:id" element={<SingleExpense />} />
				</Routes>
			</main>
		</div>
	);
};

export default UtilisateurConnecte;
