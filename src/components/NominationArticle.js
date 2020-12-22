import React from 'react';
// import './NominationArticle.scss';
import { Button } from '@material-ui/core';

function NominationArticle(props) {
	const removeNomination = (nominations, movie) => {
		let newNominations = [];
		newNominations = nominations.filter(
			(nomination) => nomination.imdbID !== movie.imdbID
		);
		props.setNominations(newNominations);
	};

	return (
		<li className="nomination__container">
			<img
				src={props.movie.Poster}
				alt="movie-poster"
				className="nomination__poster"
				onError={(event) =>
					(event.target.src = 'images/no_image_found.jpg')
				}
			/>
			<div className="nomination__desc-flex">
				<div className="nomination__description">
					<span className="nomination__title">{props.movie.Title}</span>
					<span className="nomination__year"> ({props.movie.Year})</span>
				</div>
				<Button
					className="nomination__remove-btn"
					onClick={() => removeNomination(props.nominations, props.movie)}
				>
					Remove
				</Button>
			</div>
		</li>
	);
}

export default NominationArticle;
