import React from 'react';
// import './Results.scss';
import ResultArticle from '../ResultArticle/ResultArticle';
import { CircularProgress } from '@material-ui/core';

function Results(props) {
	const resultsList = (
		<ul className="results-list">
			{props.results === undefined || props.results.length === 0 ? (
				<></>
			) : (
				props.results.map((movie) => {
					return (
						<ResultArticle
							key={movie.imdbID}
							movie={movie}
							results={props.results}
							nominations={props.nominations}
							setNominations={props.setNominations}
						/>
					);
				})
			)}
		</ul>
	);

	return (
		<div className="results-main">
			<div className="results-header">
				<span className="results-title">Results </span>
				{props.inputValue !== '' && (
					<span className="results-term">
						for: {props.inputValue}
					</span>
				)}
			</div>
			<div className="results-display">
				{props.mode === 'EMPTY' && (
					<span className="search-results-placeholder">
						Search Results
					</span>
				)}
				{props.mode === 'SHOW' && resultsList}
				{props.mode === 'LOADING' && (
					<CircularProgress color="inherit" size="4rem" />
				)}
			</div>
		</div>
	);
}

export default Results;
