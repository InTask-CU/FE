import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
	return (
		<Routes>
			<Route
				path="/dashboard"
				element={<Home />}
			/>
			<Route
				path="/register"
				element={<SignUp />}
			/>
			<Route
				path="/"
				element={<Login />}
			/>
		</Routes>
	);
}

export default App;
