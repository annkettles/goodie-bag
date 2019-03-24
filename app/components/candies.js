import React from 'react';
import {fetchCandies} from '../reducers/candies';
import {connect} from 'react-redux';

class Candies extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		console.log('did this go through?');
		console.log(this.props.getCandies());
		// this.props.getCandies();
	}

	render() {
		const candies = this.props.candies;
		console.log('this is candies', candies);
		return (
			<div>
				<h1>List of Candies:</h1>
				<ul>
					{candies.length ? (
						this.props.candies.map((candy) => {
							return (
								<div key={candy.id}>
									<li>
										<b>Name:</b> {candy.name}
										<br />
										<b>Description:</b> {candy.description}
										<br />
										<b>Quantity:</b> {candy.quantity}
										<br />
										<img src={candy.imageUrl} />
									</li>
								</div>
							);
						})
					) : null}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	candies: state.candies
});
const mapDispatchToProps = (dispatch) => ({
	getCandies: () => dispatch(fetchCandies())
});

const ShowCandies = connect(mapStateToProps, mapDispatchToProps)(Candies);

export default ShowCandies;
