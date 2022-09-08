import React, { useEffect, useState } from "react";
import Items from "../data.json";

function First(props) {
	const [item, setItem] = useState([]);
	const [price, setprice] = useState(0);
	const [base, setbase] = useState(1000);

	useEffect(() => {
		Items.map((ele) => {
			ele.checked = false;
			return ele;
		});
		setItem(Items);
	}, []);

	useEffect(() => {
		setprice(
			item.reduce((sum, ele) => {
				return ele.checked ? sum + parseInt(ele.price) : sum;
			}, base)
		);
	}, [base, item]);

	const itemChange = (ele) => {
		setItem(
			item.map((el) => {
				if (el.name === ele.name) {
					el.checked = !el.checked;
				}

				return el;
			})
		);
	};

	const sizePizza = (size) => {
		setbase(size);
	};

	const addPizza = () => {
		let size = "średnia";
		if (base === 1000) {
			size = "mała";
		} else if (base === 1500) {
			size = "duża";
		}
		let pizza = { size: size, price: price, item: [] };
		item.forEach((addition) => {
			if (addition.checked) pizza.item.push(addition);
		});
		props.getPizza(pizza);
		resetPizza();
	};

	const resetPizza = () => {
		item.forEach((it) => {
			it.price === 0 ? (it.checked = true) : (it.checked = false);
		});
		setbase(1000);
	};

	return (
		<div>
			<h1 className="nav">Skomponuj pizzę</h1>
			<h3 className="navnext">Cena zamówienia: {(price / 100).toFixed(2)}zł</h3>
			<div className="boxsizepizza">
				<img
					className={"sizepizza small " + (base === 1000 ? "checkedpizza" : "")}
					onClick={() => sizePizza(1000)}
					src={process.env.PUBLIC_URL + "/img/pizza.png"}
					alt="rozmiar pizzy"
				/>
				<img
					className={
						"sizepizza medium " + (base === 1200 ? "checkedpizza" : "")
					}
					onClick={() => sizePizza(1200)}
					src={process.env.PUBLIC_URL + "/img/pizza.png"}
					alt="rozmiar pizzy"
				/>
				<img
					className={"sizepizza big " + (base === 1500 ? "checkedpizza" : "")}
					onClick={() => sizePizza(1500)}
					src={process.env.PUBLIC_URL + "/img/pizza.png"}
					alt="rozmiar pizzy"
				/>
				<button className="btn" onClick={() => addPizza()}>
					Dodaj
				</button>
			</div>
			<div className="layoutitemall">
				{item.map((itemPizza, index) => {
					return (
						<div key={index} className="layoutitem">
							<input
								type="checkbox"
								checked={itemPizza.checked}
								onChange={() => itemChange(itemPizza)}
							></input>
							<img
								className="imgpizza"
								src={process.env.PUBLIC_URL + "/img/" + itemPizza.name + ".png"}
								alt={itemPizza.name}
							></img>
							<p className="namepizza">{itemPizza.name}</p>
							<p className="pricepizza">
								{(itemPizza.price / 100).toFixed(2)}zł
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default First;
