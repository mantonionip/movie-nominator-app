import React from 'react';

function SearchBar(props) {
	const handleInput = (event) => props.setInputValue(event.target.value);

	return (
		<div className="search-container">
			<form
				className="search-bar--form"
				onSubmit={(event) => event.preventDefault()}
				autoComplete="off"
			>
				<input
					type="text"
					className="search-field"
					placeholder="Search Title..."
					value={props.inputValue}
					onChange={handleInput}
				/>
			</form>
		</div>
	);
}

export default SearchBar;
