import React from 'react';

function SearchBar(props) {
	const handleInput = (event) => props.setInputValue(event.target.value);

	return (
		<div className="search-bar">
			<div className="search-bar__container">
				<p className="search-bar__title">Search Title</p>
				<form
					className="search-bar__form"
					onSubmit={(event) => event.preventDefault()}
					autoComplete="off"
				>
					<input
						type="search"
						className="search-bar__input"
						placeholder="e.g. Some like it hot..."
						value={props.inputValue}
						onChange={handleInput}
					/>
				</form>
			</div>
		</div>
	);
}

export default SearchBar;
