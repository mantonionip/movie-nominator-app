import React from 'react';
import ResultArticle from './ResultArticle';
import { CircularProgress } from '@material-ui/core';

function Results(props) {
	const resultsList = (
		<ul className="results__list">
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
		<div className="results">
			<div className="results__container">
				<h2 className="results__header">
					<span className="results__title">Results</span>
					{props.inputValue !== '' && (
						<span>
							{' '}
							for
							<span className="results__term">
								{' '}
								{props.inputValue}
							</span>
						</span>
					)}
				</h2>
				<p className="results__info-text">
					<span role="img" aria-label="clapper-board">
						🎬
					</span>
					Click on the{' '}
					<strong className="results__bold-text">title</strong> for
					more info on{' '}
					<strong className="results__bold-text">IMDB</strong>!
				</p>
				<span className="results__span"></span>
				<div className="results__display">
					{props.mode === 'EMPTY' && (
						<span className="results__search-placeholder">
							Search a movie to nominate
						</span>
					)}
					{props.mode === 'SHOW' && resultsList}
					{props.mode === 'LOADING' && (
						<CircularProgress color="inherit" size="4rem" />
					)}
				</div>
			</div>
		</div>
	);
}

export default Results;
