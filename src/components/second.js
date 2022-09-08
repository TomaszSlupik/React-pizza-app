import React, { useEffect } from "react";
import { useState } from "react";

function Second(props) {
	const [price, setPrice] = useState(0);
	const [order, setOrder] = useState([]);

	useEffect(() => {
		if (props.newPizza){
		setOrder((or) => [...or, props.newPizza]);
		}
	}, [props.newPizza]);

	useEffect(() => {
		let allprice = order.reduce((sum, pizza) => sum + pizza.price, 0);
		setPrice(allprice);
	}, [order]);

	const deletePizza = (ind) => {
		let deleteorder = order.filter((pizza, index) => index !== ind)
		setOrder(deleteorder)
	}


	return (
		<div>
			<h1 className="nav">Twoje zamówienie</h1>
			{order.map((pizza, index) => {
				return (
					<div key={index}>
						<h3 className="navnext">
							{index+1}# {pizza.size} {(pizza.price/100).toFixed(2)} zł
						</h3>
						<button className="btntwo" onClick={()=> deletePizza(index)}>
					Usuń
				</button>
					</div>
				);
			})}
			<p className="navnext">------</p>
			<p className="finall">Do zapłaty {(price /100).toFixed(2)} zł</p>
		</div>
	);
}

export default Second;
