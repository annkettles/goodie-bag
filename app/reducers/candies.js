import axios from 'axios';

//Action Types
const GET_CANDIES = 'GET_CANDIES';
const GET_SINGLE_CANDY = 'GET_SINGLE_CANDY';

//Action Creators
const getCandies = (candies) => ({
	type: GET_CANDIES,
	candies
});
const getSingleCandy = (candy) => ({
	type: GET_SINGLE_CANDY,
	candy
});

//Thunk
export const fetchCandies = () => async (dispatch) => {
	const {data} = await axios.get('/api/candies');
	return dispatch(getCandies(data));
};

export const fetchSingleCandy = (id) => async (dispatch) => {
	const {data} = await axios.get(`/api/candies/${id}`);
	return dispatch(getSingleCandy(data));
};

//Initial State

//Sub-Reducer
const reducer = (state = [], action) => {
	switch (action.type) {
		case GET_CANDIES:
			return action.candies;
		case GET_SINGLE_CANDY:
			const candies = state.filter((candy) => {
				return candy.id !== action.candy.id;
			});
			return [ candies, action.candy ];
		default:
			return state;
	}
};

export default reducer;
