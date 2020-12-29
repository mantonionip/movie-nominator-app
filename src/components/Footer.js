import React from 'react';

function Footer(props) {
	return (
		<footer className="footer">
			<div className="footer__container">
				<p className="footer__text">
					<a
						href="https://github.com/mantonionip/the-shoppies"
						target="_blank"
						rel="noopener noreferrer"
						className="footer__link"
					>
						<span className="footer__span">View code on </span>
						GitHub
					</a>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
