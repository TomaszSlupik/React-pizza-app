import "./App.css";
import First from "./components/first";
import Second from "./components/Second";
import { useState } from "react";



function App() {


	const [pizza, setPizaa] = useState (null)

	const getPizza = (pizza) =>{
		setPizaa(pizza)
	}

	return (
		<div className="App">
			

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
