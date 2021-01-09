import React from 'react';
import { Button } from '@material-ui/core';
import Popup from 'reactjs-popup';

function Banner(props) {
	// Display thank you message upon submission
	const display = props.popup.isSubmitted ? (
		<>
			<div className="popup__submit-message">
				<p>Completed!</p>
			</div>
			<p className="popup__article">Thank you for your submission!</p>
			<div className="popup__buttons popup__close-btn">
				<Button
					className="popup__custom-btn"
					onClick={props.closePopup}
				>
					Close
				</Button>
			</div>
		</>
	) : (
		<div className="popup">
			<div className="popup__header">
				<span className="popup__title">
					Your nomination list is complete!
				</span>
			</div>
			<article className="popup__article">
				<p>Here are the titles you picked:</p>
			</article>
			<div className="popup__nominated-list">
				{props.nominations.map(({ Title }) => (
					<p className="popup__nominated-title">
						{' '}
						<span role="img" aria-label="bullet point">
							⚫️
						</span>{' '}
						{Title}
					</p>
				))}
			</div>
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
