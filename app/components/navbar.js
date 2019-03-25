import React from 'react';
import ShowCandies from './candies';
import Root from './root';
import Candies from './candies';
import {Link, Route} from 'react-router-dom';

export default class NavBar extends React.Component {
	render() {
		return (
			<nav>
				<Link to="/">Home</Link>
				<Link to="/candies">Show Candies</Link>
			</nav>
		);
	}
}

{
	/* <Route exact path="/" component={Root} />
    <Link to="/">Home</Link>
    <Route path="/candies" component={Candies} />
    <Link to="/candies">All Candies</Link> */
}
