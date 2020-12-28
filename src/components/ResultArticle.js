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
		<li className="article__container">
			<img
				src={props.movie.Poster}
				alt="movie-poster"
				className="article__poster"
				onError={(event) =>
					(event.target.src = 'images/no_image_found.jpg')
				}
			/>
			<div className="article__desc-flex">
				<div className="article__description">
					<span className="article__title">
						<a
							href={`https://www.imdb.com/title/${props.movie.imdbID}/`}
							className="article__link"
							target="_blank"
							rel="noopener noreferrer"
						>
							{props.movie.Title}
						</a>
					</span>
					<span className="article__year"> ({props.movie.Year})</span>
					<span>{props.movie.Actors}</span>
				</div>
				<Button
					className="article__nominate-btn"
					onClick={saveNomination}
					disabled={isMovieNominated(props.nominations, props.movie)}
				>
					{isMovieNominated(props.nominations, props.movie)
						? 'Nominated!'
						: 'Nominate'}
				</Button>
			</div>
		</li>
	);
}

export default ResultArticle;
