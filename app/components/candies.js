import React from 'react';
import {fetchCandies} from '../reducers/candies';
import {connect} from 'react-redux';
import fetchSingleCandy from '../reducers/candies';
import {Link} from 'react-router-dom';

class Candies extends React.Component {
	constructor() {
		super();
		this.clickHandler = this.clickHandler.bind(this);
	}

	componentDidMount() {
		console.log('did this go through?');
		console.log(this.props.getCandies());
		// this.props.getCandies();
	}

	clickHandler = (event) => {
		console.log('this is the event target', event.target);
	};

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
								<Link to="/candies/:id">
									<div key={candy.id}>
										<li onClick={this.clickHandler}>
											<b>Name:</b> {candy.name}
											<br />
											<b>Description:</b> {candy.description}
											<br />
											<b>Quantity:</b> {candy.quantity}
											<br />
											<img src={candy.imageUrl} />
										</li>
									</div>
								</Link>
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
	getCandies: () => dispatch(fetchCandies()),
	getSingleCandy: () => dispatch(fetchSingleCandy(1))
});

const ShowCandies = connect(mapStateToProps, mapDispatchToProps)(Candies);

export default ShowCandies;
