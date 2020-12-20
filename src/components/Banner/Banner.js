import React from 'react';
// import './Banner.scss';
import { Button } from '@material-ui/core';
import Popup from 'reactjs-popup';

const popupStyles = {
	backgroundColor: 'white',
	border: 'none',
	height: '15rem',
	borderRadius: '0.5rem',
	padding: 0,
};

function Banner(props) {
	// Display thank you message upon submission
	const display = props.popup.isSubmitted ? (
		<>
			<div className="submit-message">Thank you for your submission!</div>
			<div className="popup-buttons">
				<Button className="custom-button" onClick={props.closePopup}>
					Close
				</Button>
			</div>
		</>
	) : (
		<div>
			<div className="popup-header">
				<span className="popup-title">
					Thank you, you've made your 5 nominations!
				</span>
			</div>
			<article className="popup-article">
				You can edit or submit your nominations list.
			</article>
			<div className="popup-buttons">
				<Button className="custom-button" onClick={props.closePopup}>
					Edit
				</Button>
				<Button className="custom-button" onClick={props.handleSubmit}>
					Submit
				</Button>
			</div>
		</div>
	);

	return (
		<Popup
			modal
			open={props.popup.isActive}
			contentStyle={popupStyles}
			onClose={props.closePopup}
		>
			{display}
		</Popup>
	);
}

export default Banner;
