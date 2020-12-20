import React from 'react';

function Footer(props) {
	return (
		<div className="footer-container">
			<p className="footer-text">
				<span>Learn more about </span>
				<a
					href="https://github.com/mantonionip/the-shoppies"
					target="_blank"
					rel="noopener noreferrer"
					className="footer-link"
				>
					this project
				</a>
			</p>
		</div>
	);
}

export default Footer;
