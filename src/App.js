import logo from "./logo.svg";
import "./App.css";
import First from "./components/first";
import Second from "./components/second";

function App() {
	return (
		<div className="App">
			<div className="App-header-box">
				<div className="header-img"></div>
				<h1 className="App-header">Zamów pizzę</h1>
			</div>

			<div className="containerbuy">
				<div className="boxbuy">
					<First />
				</div>
        <div className="boxbuy">
					<Second />
				</div>
			</div>
		</div>
	);
}

export default App;
