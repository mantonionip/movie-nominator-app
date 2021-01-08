import React from 'react';
import NominationArticle from './NominationArticle';
import Vote from '../assets/vote.svg';

function Nominations(props) {
	const getNominationCount = () => {
		if (props.nominations === undefined || props.nominations.length === 0) {
			return (
				<div>
					You need to nominate <strong>5</strong> titles!
				</div>
			);
		} else if (5 - props.nominations.length > 1) {
			return (
				<>
					You need to nominate{' '}
					<strong>{5 - props.nominations.length}</strong> more titles!
				</>
			);
		} else if (5 - props.nominations.length === 1) {
			return (
				<div>
					You need to nominate <strong>1</strong> more title!
				</div>
			);
		} else {
			return 'Your nomination list is complete!';
		}
	};

	return (
		<div className="nominations">
			<div className="nominations__container">
				<div className="nominations__header">
					<span className="nominations__title">Nomination List </span>
					<div className="nominations__count-container">
						<img
							id="voteBox"
							className="results__film-reel"
							src={Vote}
							alt="Illustrated nomination icon."
						/>
						<span className="nominations__count">
							{getNominationCount()}
						</span>
					</div>
				</div>
				<span className="nominations__span"></span>
				<ul className="nominations__list">
					{props.nominations === undefined ||
					props.nominations.length === 0 ? (
						<></>
					) : (
						props.nominations.map((movie) => {
							return (
								<NominationArticle
									key={movie.imdbID}
									movie={movie}
									nominations={props.nominations}
									setNominations={props.setNominations}
								/>
							);
						})
					)}
				</ul>
				{props.showSubmit && (
					<button
						className="nominations__custom-btn"
						onClick={props.handleSubmit}
					>
						Submit
					</button>
				)}
			</div>
		</div>
	);
}

export default Nominations;
