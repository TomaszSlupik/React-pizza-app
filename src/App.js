import logo from "./logo.svg";
import "./App.css";
import First from "./components/first";
import Second from "./components/second";
import { useState } from "react";

function App() {


	const [pizza, setPizaa] = useState (null)

	const getPizza = (pizza) =>{
		setPizaa(pizza)
	}

	return (
		<div className="App">
			<div className="App-header-box">
				<div className="header-img"></div>
				<div className="shadow"></div>
				<h1 className="App-header">Zamów pizzę</h1>
			</div>

			<div className="containerbuy">
				<div className="boxbuy">
					<First getPizza={getPizza} />
				</div>
        <div className="boxbuy">
					<Second newPizza={pizza}/>
				</div>
			</div>
		</div>
	);
}

export default App;
