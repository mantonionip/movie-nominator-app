import React, { useState, useEffect, useCallback } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import Nominations from './components/Nominations';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Request from './helpers/Request';
import { clear, submit } from './helpers/storage';
import useDebounce from './hooks/useDebounce';

let storage = JSON.parse(localStorage.getItem('nominations'));
let session = storage?.nominations;

function App() {
	// Various visual modes for Results component
	const EMPTY = 'EMPTY';
	const SHOW = 'SHOW';
	const ERROR = 'ERROR';
	const LOADING = 'LOADING';

	// Search states
	const [inputValue, setInputValue] = useState('');
	const [searchTerm, setSearchTerm] = useState(inputValue);
	const term = useDebounce(inputValue, 300);
	const onSearch = useCallback(setSearchTerm, [setSearchTerm]);

	const [results, setResults] = useState([]);
	const [isSubmitted, setIsSubmitted] = useState(storage?.submitted);

	// Persist user nominations beyond refresh
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

	useEffect(() => {
		if (isSubmitted) return;

		if (nominations === undefined || nominations.length === 5) {
			// Toggle popup if 5 movies are nominated
			setPopup({ isSubmitted: false, isActive: true });
		}
	}, [nominations, isSubmitted]);

	// Call OMDB api off search
	useEffect(() => {
		setMode(LOADING);
		Request(searchTerm).then((res) => {
			setResults(res.data.Search);

			if (res.data.Error === 'Movie not found!') {
				return setMode(ERROR);
			}

			res.data.Search === undefined || res.data.Search.length === 0
				? setMode(EMPTY)
				: setMode(SHOW);
		});
	}, [searchTerm]);

	const closePopup = () => setPopup({ isActive: false, isSubmitted: false });

	const handleSubmit = () => {
		setInputValue('');
		setResults([]);
		setPopup({
			isActive: true,
			isSubmitted: true,
		});
		session = nominations;
		submit(setIsSubmitted);
	};

	return (
		<div className="app">
			<Header />
			<main className="main wrapper">
				<SearchBar
					inputValue={inputValue}
					setInputValue={setInputValue}
				/>
				<div className="main__container">
					<Results
						results={results}
						nominations={nominations}
						setNominations={setNominations}
						inputValue={inputValue}
						mode={mode}
						setIsSubmitted={setIsSubmitted}
					/>
					<Nominations
						popup={popup}
						setPopup={setPopup}
						nominations={nominations}
						setNominations={setNominations}
						handleSubmit={handleSubmit}
						clearData={
							isSubmitted &&
							(() => clear(setNominations, setIsSubmitted))
						}
						showSubmit={
							!isSubmitted &&
							!popup.isActive &&
							nominations.length === 5
						}
						setIsSubmitted={setIsSubmitted}
					/>
				</div>
			</main>
			<Footer />
			<Banner
				popup={popup}
				closePopup={closePopup}
				handleSubmit={handleSubmit}
				nominations={nominations}
			/>
		</div>
	);
}

export default App;
