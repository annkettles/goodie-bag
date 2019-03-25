import React from 'react';
import ShowCandies from './candies';
import {Link, Route} from 'react-router-dom';
import Root from './root';
import Candies from './candies';

export default class NavBar extends React.Component {
	render() {
		return (
			<nav>
				<div>
					<Route exact path="/" component={Root} />
					<Link to="/">Home</Link>
					<Route path="/candies" component={Candies} />
					<Link to="/candies">All Candies</Link>
				</div>
			</nav>
		);
	}
}
