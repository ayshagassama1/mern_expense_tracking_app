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
import CreateExpense from "./components/CreateExpense";
function App() {
	
 return(	
		<BrowserRouter>
			      <Header/>
			<main style={{ minHeight: "87vh" }}>
				<Routes>
					<Route path="/home" element={<Body />} exact />
					<Route path="/login" element={<Connection />} />
					<Route path="/register" element={<Inscription />} />
					<Route path="/profile" element={<MyProfile />} />
					<Route path="/reports" element={<Reports />} />
					<Route path="/expenses" element={<Expenses />} />
					<Route path="/" element={<LandingPage />} />
					<Route path="/createexpense" element={<CreateExpense />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	
 )};

export default App;
