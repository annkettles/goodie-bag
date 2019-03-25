import React from 'react';
import fetchSingleCandy from '../reducers/candies';
import {connect} from 'react-redux';

class SingleCandy extends React.Component {
	constructor() {
		super();
		this.state = {
			candy: []
		};
	}
	render() {
		return (
			<div>
				<h1>Candy Page!</h1>
				<b>Name: {this.state.name}</b>
				<br />
				<b>Description: {this.state.description}</b>
				<br />
				<b>Quantity: {this.state.quantity}</b>
				<br />
				<img src={this.state.name} />
				<br />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	candies: state.candies
});
const mapDispatchToProps = (dispatch) => ({
	getSingleCandy: () => dispatch(fetchSingleCandy())
});

const ShowSingleCandy = connect(mapStateToProps, mapDispatchToProps)(SingleCandy);

export default ShowSingleCandy;
