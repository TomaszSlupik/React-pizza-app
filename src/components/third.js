import React from "react";
import { withRouter } from "react-router-dom";
import { CtxConsumer } from "../index";

const styles = {
	btn : 
	{width: '120px', height: '40px', cursor: 'pointer', borderRadius: '8px', border: 'none'}
}

function Third(props) {


	const back = () => {
		props.history.push('/')
	}
	


  return (
	<CtxConsumer>
		{
			context => (
			<div>
				<div>Koszyk</div>
				<h2>{(context.item.toFixed(2)) + ' zł'}</h2>
				<button 
				style={styles.btn}
				onClick = {()=> back()}>Powrót</button>
			</div>
			)
		}
	</CtxConsumer>
	
  )
}

export default withRouter (Third)