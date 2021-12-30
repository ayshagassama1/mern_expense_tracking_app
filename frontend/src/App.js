import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Connection from "./components/Connection";
import Inscription from "./components/Inscription";
function App() {
	return (
		<BrowserRouter>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Body />} exact />
					<Route path="/connection" element={<Connection />} />
					<Route path="/inscription" element={<Inscription />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
