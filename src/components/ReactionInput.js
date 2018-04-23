import React from 'react';

const ReactionInput = props => (
	<form onSubmit={props.lookupDrugByReactionsOnSubmitFunction}>
		<input type="text" name="reaction1" placeholder="Drug Reaction 1..."/>
		<input type="text" name="reaction2" placeholder="Drug Reaction 2..."/>
		<input type="text" name="reaction3" placeholder="Drug Reaction 2..."/>
		<input type="text" name="reaction4" placeholder="Drug Reaction 2..."/>
		<button>Look up Drug</button>
	</form>
);

export default ReactionInput;