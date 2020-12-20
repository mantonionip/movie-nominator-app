import React from 'react';
// import './ResultArticle.scss';
import { Button } from '@material-ui/core';

function ResultArticle(props) {
	const isMovieNominated = (nominations, movie) => {
		let nominated = false;
		if (nominations.length === 5) {
			// Disables nominate button if 5 titles are already nominated
			return true;
		} else {
			nominations.map((nomination) =>
				nomination.imdbID === movie.imdbID ? (nominated = true) : null
			);
		}
		return nominated;
	};

	const saveNomination = () => {
		props.setNominations((nominations) => [...nominations, props.movie]);
		localStorage.setItem(
			'nominations',
			JSON.stringify([...props.nominations, props.movie])
		);
	};

	return (
		<li className="article-container">
			<img
				src={props.movie.Poster}
				alt="movie-poster"
				className="article-poster"
				onError={(event) =>
					(event.target.src = 'images/no_image_found.jpg')
				}
			/>
			<div className="article-description">
				<span className="article-title">{props.movie.Title}</span>
				<span className="article-year">{props.movie.Year}</span>
			</div>
			<Button
				variant="contained"
				color="primary"
				onClick={saveNomination}
				disabled={isMovieNominated(props.nominations, props.movie)}
			>
				Nominate
			</Button>
		</li>
	);
}

export default ResultArticle;
