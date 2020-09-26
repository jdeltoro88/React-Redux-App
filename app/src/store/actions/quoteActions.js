import axios from 'axios';



export const fetchQuote = () => {
	return (dispatch) => {
		dispatch({ type: 'FETCH_QUOTE_START' });
		axios
			.get('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
			.then((res) => {
				console.log('axios',  res.data)
				dispatch({ type: 'FETCH_QUOTE_SUCCESS', payload: res.data.starWarsQuote });
			})
			.catch((err) => {
				
				dispatch({
					type: 'FETCH_QUOTE_FAILURE',
					payload: `Error ${err.response.status}: ${err.response.data}`,
				});
			});
	};
};