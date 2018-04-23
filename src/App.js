import React from "react";

import Main from './components/Main';
import ReactionInput from './components/ReactionInput';
import DrugFound from './components/DrugFound';

const API_KEY = '9875762ba8d721510ededbbcce72151f';

class App extends React.Component {
	state = {

	}

	/********************************************** 
	*   lookupDrugByReactionsOnSubmitFunction()
	***********************************************/
	lookupDrugByReactionsOnSubmitFunction = async (e) => {


		try {


			e.preventDefault();
			const reactionSelected1 = e.target.elements.reaction1.value;
			const reactionSelected2 = e.target.elements.reaction2.value;
			const reactionSelected3 = e.target.elements.reaction3.value;
			const reactionSelected4 = e.target.elements.reaction4.value;


			var URL_allEventListByReaction = "https://api.fda.gov/drug/event.json?search=";
			var queryString = URL_allEventListByReaction + "patient.reaction.reactionmeddrapt:%22" + reactionSelected1 +
				"%22+AND+patient.reaction.reactionmeddrapt:%22" + reactionSelected2 +
				"%22+AND+patient.reaction.reactionmeddrapt:%22" + reactionSelected3 +
				"%22+AND+patient.reaction.reactionmeddrapt:%22" + reactionSelected4 + "%22&limit=100";
			const api_call = await fetch(queryString);

			const data = await api_call.json();

			var drugArray;

			drugArray = data.results[0].patient.drug;

			var drugLength = drugArray.length;
			console.log("drugArray.length=" + drugArray.length);



			if (reactionSelected1 || reactionSelected2 || reactionSelected3 || reactionSelected4) {

				this.setState({
					stateDrugArray: drugArray,
					drugLength: drugLength
				});
			} else {

				this.setState({
					stateDrugArray: undefined,
					drugLength: 0
				});
			}

		} catch (error) {
			console.log("EXCEPTION in drugArray");
			return;
		}

	} //lookupDrugByReactions

	/********************************************** 
	*   reader()
	***********************************************/
	render() {

		//var receiveDrugArray = this.state.stateDrugArray;
		var jsxListofRows = [];
		for (var i = 0; i < this.state.drugLength; i++) {
			try {
				var drugName =  this.state.stateDrugArray[i].activesubstance.activesubstancename;
				if ( drugName.length > 0)
					jsxListofRows.push(<DrugFound key={i} stateDrug1={drugName} />);
			} catch (error) {
				jsxListofRows.push(<DrugFound key={i} stateDrug1={`empty`} />);
			}
		}

		return (
			<div>
				<div className="wrapper">
					<div className="main">
						<div className="container">
							<div className="row">
								<div className="col-xs-5 title-container">
								</div>

								<div className="col-xs-7 form-container">
									<div className="andrewOpenFDADemoInREACTHeader">
										<h1>Drug Reaction Lookup Portal</h1>
										<span className="andrewOpenFDADemoInREACTinfo">Find out drug from reactions..</span>
									</div>

									<ReactionInput lookupDrugByReactions={this.lookupDrugByReactions} />
									<div className="andrewOpenFDADemoInREACTHeader"> Total Drug found
					                     <span className="andrewOpenFDADemoInREACTinfo"> {this.state.drugLength}</span>
									</div>
									<span>{jsxListofRows}</span>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default App;