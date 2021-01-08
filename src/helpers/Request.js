import axios from 'axios';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

const search = (searchTerm) =>
	axios({
		method: 'GET',
		url: `https://www.omdbapi.com/?apikey=${API_KEY}`,
		params: {
			s: searchTerm,
			type: 'movie',
			plot: 'full',
			r: 'json',
		},
	});

export default search;
