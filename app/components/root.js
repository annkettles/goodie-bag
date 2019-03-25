import React from 'react';
import ShowCandies from './candies';
import NavBar from './navbar';
import {HashRouter as Router, Route} from 'react-router-dom';

const Root = () => {
	return (
		<Router>
			<div>
				<NavBar />
				<Route exact path="/candies" component={ShowCandies} />
				<main>
					<h1>Welcome to the Goodie Bag!</h1>
					<p>What a nice home page for your goodies!</p>
					<ShowCandies />
				</main>
			</div>
		</Router>
	);
};

export default Root;
