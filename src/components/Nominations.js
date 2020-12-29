import React, { useEffect } from 'react';
import NominationArticle from './NominationArticle';

function Nominations(props) {
	useEffect(() => {
		// Toggle popup if 5 movies are nominated
		if (props.nominations === undefined || props.nominations.length === 5) {
			props.setPopup({ ...props.popup, isActive: true });
		}
	}, [props.nominations]);

	const getNominationCount = () => {
		if (props.nominations === undefined || props.nominations.length === 0) {
			return 'You need to nominate 5 titles!';
		} else if (5 - props.nominations.length > 1) {
			return `You need to nominate ${
				5 - props.nominations.length
			} more titles!`;
		} else if (5 - props.nominations.length === 1) {
			return 'You need to nominate 1 more title!';
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
						<span role="img" aria-label="trophy">
							🏆
						</span>
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
			</div>
		</div>
	);
}

export default Nominations;
