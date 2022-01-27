import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Connection from "./components/Connection";
import Inscription from "./components/Inscription";
import MyProfile from "./components/MyProfile";
import Reports from "./components/Reports";
import LandingPage from "./components/LandingPage";
import Expenses from "./components/Expenses";
import SingleExpense from "./components/SingleExpense";
import { useDispatch, useSelector } from "react-redux";
import NavBarNonConnecte from "./components/layout/NavBarNonConnecte";
function App() {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	if (!userInfo) {
		return (
			<BrowserRouter>
				<NavBarNonConnecte />
				<main style={{ minHeight: "87vh" }}>
					<Routes>
						<Route path="/" element={<LandingPage />} exact />
						<Route path="/login" element={<Connection />} />
						<Route path="/register" element={<Inscription />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		);
	} else {
		return (
			<BrowserRouter>
				<Header />
				<main style={{ minHeight: "87vh" }}>
					<Routes>
						<Route path="/" element={<Body />} exact />
						<Route path="/profile" element={<MyProfile />} />
						<Route path="/reports" element={<Reports />} />
						<Route path="/expenses" element={<Expenses />} exact />
						<Route path="/expense/:id" element={<SingleExpense />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		);
	}
}

export default App;
