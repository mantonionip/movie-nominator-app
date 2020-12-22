import React from 'react';

function Footer(props) {
	return (
		<footer className="footer">
			<div className="footer__container">
				<p className="footer__text">
					<span>View code on </span>
					<a
						href="https://github.com/mantonionip/the-shoppies"
						target="_blank"
						rel="noopener noreferrer"
						className="footer__link"
					>
						GitHub
					</a>
				</p>
			</div>	
		</footer>
	);
}

export default Footer;
