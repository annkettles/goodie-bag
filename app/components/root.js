import React from 'react';
import ShowCandies from './candies';
// import NavBar from './navbar';
// import {HashRouter as Router, Route, Link} from 'react-router-dom';

const Root = () => {
	return (
		<div>
			<nav> Navigation</nav>
			<main>
				<h1>Welcome to the Goodie Bag!</h1>
				<p>What a nice home page for your goodies!</p>
				<ShowCandies />
			</main>
		</div>
	);
};

export default Root;
