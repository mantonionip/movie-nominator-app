import React, { useState, useEffect, useCallback } from 'react';
import './styles/App.scss';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import Nominations from './components/Nominations';
import Footer from './components/Footer';
import Banner from './components/Banner';
import axios from 'axios';
import useDebounce from './hooks/useDebounce';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

function App() {
	// Various visual modes for Results component
	const EMPTY = 'EMPTY';
	const SHOW = 'SHOW';
	const LOADING = 'LOADING';

	// Search states
	const [inputValue, setInputValue] = useState('');
	const [searchTerm, setSearchTerm] = useState(inputValue);
	const term = useDebounce(inputValue, 300);
	const onSearch = useCallback(setSearchTerm, [setSearchTerm]);

	const [results, setResults] = useState([]);

	// Persist user nominations beyond refresh
	const session = JSON.parse(localStorage.getItem('nominations'));
	const [nominations, setNominations] = useState(session || []);

	// Current mode of results
	const [mode, setMode] = useState(EMPTY);

	// Toggle modal activity
	const [popup, setPopup] = useState({
		isActive: false,
		isSubmitted: false,
	});

	// Sets term to be passed to api after debounce
	useEffect(() => {
		setSearchTerm(term);
	}, [term, onSearch]);

	// Call OMDB api off search
	useEffect(() => {
		setMode(LOADING);
		axios({
			method: 'GET',
			url: `https://www.omdbapi.com/?apikey=${API_KEY}`,
			params: {
				s: searchTerm,
				type: 'movie',
				plot: 'full',
			},
		}).then((res) => {
			setResults(res.data.Search);
			res.data.Search === undefined || res.data.Search.length === 0
				? setMode(EMPTY)
				: setMode(SHOW);
		});
	}, [searchTerm]);

	const closePopup = () => setPopup({ isActive: false, isSubmitted: false });

	const handleSubmit = () => {
		setNominations([]);
		setInputValue('');
		setResults([]);
		setPopup({
			...popup,
			isSubmitted: true,
		});
		localStorage.clear();
	};

	return (
		<div className="app wrapper">
			<Banner
				popup={popup}
				closePopup={closePopup}
				handleSubmit={handleSubmit}
			/>
			<h1 className="app__heading">
				<span className="app__heading-title">The Shoppies</span>
				<span className="app__heading-span"> Movie awards for entrepreneurs</span>
			</h1>
			<SearchBar inputValue={inputValue} setInputValue={setInputValue} />
			<div className="main__container">
				<Results
					results={results}
					nominations={nominations}
					setNominations={setNominations}
					inputValue={inputValue}
					mode={mode}
				/>
				<Nominations
					popup={popup}
					setPopup={setPopup}
					nominations={nominations}
					setNominations={setNominations}
				/>
			</div>
			<Footer />
		</div>
	);
}

export default App;
