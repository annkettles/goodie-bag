import React from 'react';
import ShowCandies from './candies';
import NavBar from './navbar';
import NoMatch from './nomatch';
import SingleCandy from './singleCandy';
import Home from './home';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router';

const Root = () => {
	return (
		<Router>
			<div>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/candies" component={ShowCandies} />

					<Route path="/candies/:id" component={SingleCandy} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	);
};

export default Root;
