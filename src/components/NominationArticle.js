import React from 'react';
import { Button } from '@material-ui/core';
import { set } from '../helpers/storage';

function NominationArticle(props) {
	const removeNomination = (nominations, movie) => {
		let newNominations = [];
		newNominations = nominations.filter(
			(nomination) => nomination.imdbID !== movie.imdbID
		);
		props.setNominations(newNominations);
		set(newNominations);
		props.setIsSubmitted(false);
	};

	return (
		<li className="nomination__container">
			<div className="nomination__img-container">
				<img
					src={props.movie.Poster}
					alt={`${props.movie.Title} poster`}
					className="nomination__poster"
					onError={(event) =>
						(event.target.src = 'images/no_image_found.jpg')
					}
				/>
			</div>
			<div className="nomination__desc-flex">
				<div className="nomination__description">
					<span className="nomination__title">
						<a
							href={`https://www.imdb.com/title/${props.movie.imdbID}/`}
							className="nomination__link"
							target="_blank"
							rel="noopener noreferrer"
						>
							{props.movie.Title}
						</a>
					</span>
					<span className="nomination__year">
						{' '}
						({props.movie.Year})
					</span>
				</div>
				<Button
					className="nomination__remove-btn"
					onClick={() =>
						removeNomination(props.nominations, props.movie)
					}
				>
					Remove
				</Button>
			</div>
		</li>
	);
}

export default NominationArticle;
