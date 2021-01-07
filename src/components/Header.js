import React from 'react';
import FilmReel from '../assets/film-reel.svg';

function Header(props) {
	return (
		<header>
			<div className="app__hero">
				<img
					id="filmReel"
					className="app__film-reel"
					src={FilmReel}
					alt="Animated film reel."
				/>
				<h1 className="app__heading">
					<span className="app__heading-title">The Shoppies</span>
					<span className="app__heading-span">
						{' '}
						Movie awards for entrepreneurs
					</span>
				</h1>
				<img
					id="filmReel"
					className="app__film-reel"
					src={FilmReel}
					alt="Animated film reel."
				/>
			</div>
		</header>
	);
}

export default Header;
