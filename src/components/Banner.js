import React from 'react';
import { Button } from '@material-ui/core';
import Popup from 'reactjs-popup';

function Banner(props) {
	// Display thank you message upon submission
	const display = props.popup.isSubmitted ? (
		<>
			<div className="popup__submit-message">
				Thank you for your submission!
			</div>
			<div className="popup__buttons">
				<Button
					className="popup__custom-btn"
					onClick={props.closePopup}
				>
					Close
				</Button>
			</div>
		</>
	) : (
		<div>
			<div className="popup__header">
				<span className="popup__title">
					Thank you for nominating your top 5 movies!
				</span>
			</div>
			<article className="popup__article">
				Click below to edit or submit your list.
			</article>
			<div className="popup__buttons">
				<Button
					className="popup__custom-btn"
					onClick={props.closePopup}
				>
					Edit
				</Button>
				<Button
					className="popup__custom-btn"
					onClick={props.handleSubmit}
				>
					Submit
				</Button>
			</div>
		</div>
	);

	return (
		<Popup modal open={props.popup.isActive} onClose={props.closePopup}>
			{display}
		</Popup>
	);
}

export default Banner;
