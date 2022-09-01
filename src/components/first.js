import React, { useEffect, useState } from "react";
import Items from "../data.json";

function First() {
	const [item, setItem] = useState([]);

	useEffect(() => {}, []);

	return (
		<div>
			<h1>Skomponuj pizzę</h1>
			<div className="layoutitemall">
				{Items.map((itemPizza, index) => {
					return (
						<div key={index} className="layoutitem">
							<input type="checkbox"></input>
							<img
								className="imgpizza"
								src={process.env.PUBLIC_URL + "/img/" + itemPizza.name + ".png"}
								alt={itemPizza.name}
							></img>
							<p className="namepizza">{itemPizza.name}</p>
							<p className="pricepizza">{(itemPizza.price / 100).toFixed(2)}zł</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default First;
