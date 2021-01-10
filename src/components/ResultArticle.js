import React from 'react';
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
		props.setIsSubmitted(false);
		localStorage.setItem(
			'nominations',
			JSON.stringify({
				nominations: [...props.nominations, props.movie],
			})
		);
	};

	return (
		<li className="article__container">
			<div className="article__img-container">
				<img
					src={props.movie.Poster}
					alt={`${props.movie.Title} poster`}
					className="article__poster"
					onError={(event) =>
						(event.target.src = 'images/no_image_found.jpg')
					}
				/>
			</div>
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
				</div>
				<Button
					className="article__nominate-btn"
					onClick={saveNomination}
					disabled={isMovieNominated(props.nominations, props.movie)}
				>
					Nominate
				</Button>
			</div>
		</li>
	);
}

export default ResultArticle;
