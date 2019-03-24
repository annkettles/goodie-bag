import axios from 'axios';

//Action Types
const GET_CANDIES = 'GET_CANDIES';

//Action Creators
const getCandies = (candies) => ({
	type: GET_CANDIES,
	candies
});

//Thunk
export const fetchCandies = () => async (dispatch) => {
	const {data} = await axios.get('/api/candies');
	return dispatch(getCandies(data));
};

//Initial State

//Sub-Reducer
const reducer = (state = [], action) => {
	switch (action.type) {
		case GET_CANDIES:
			return action.candies;
		default:
			return state;
	}
};

export default reducer;
